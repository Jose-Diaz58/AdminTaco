import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Save, X } from "lucide-react";
import Axios from "axios";
import DatosBD from "../../services/Apidatos";
import Swal from "sweetalert2";

export function GestionProductos() {
  const [productos, setProductos] = useState([]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    categoria: 'Tacos'
  });

  const obtenerProductos = async () => {
      const datosbd = await DatosBD.getDatos();
      setProductos(datosbd.data);
  }


  const eliminarDatos = async(id)=>{
      Swal.fire({
      title: "¿Estás seguro de eliminar el producto?",
      text: "Una vez borrado no se podra deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => { 
      if (result.isConfirmed) {
        try {
          await DatosBD.eliminarProducto(id);
          obtenerProductos();
          Swal.fire({
            title: "¡Eliminado!",
            text: "El registro ha sido borrado con éxito.",
            icon: "success"
          });
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "No se pudo eliminar el registro.",
            icon: "error"
          });
        }
      }
    })
  }

  useEffect(() => {
    obtenerProductos();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGuardar = async () => {
    if (!formData.nombre.trim() || !formData.precio) {
      alert("Por favor, ingresa el nombre y el precio del producto.");
      return;
    }

    try {
      const nuevoProducto = {
        nombre: formData.nombre,
        precio: parseFloat(formData.precio),
        categoria: formData.categoria
      };

      await DatosBD.postDatos(nuevoProducto);
      await obtenerProductos(); 
      setFormData({ nombre: '', precio: '', categoria: 'Tacos' });
      setMostrarFormulario(false);
    } catch (error) {
      console.error("Error al guardar el producto:", error);
      alert("Hubo un problema al guardar el producto.");
    }
  };

  return (
    <div className="w-full relative max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">

        <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Gestión de Productos</h2>
              <p className="text-orange-100 mt-1 text-sm md:text-base"> {productos.length} productos en el catálogo</p>
            </div>
            <button onClick={() => setMostrarFormulario(true)} className="flex items-center justify-center gap-2 bg-white text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-50 transition-colors text-sm md:text-base"
            ><Plus className="w-4 h-4 md:w-5 md:h-5" />Nuevo Producto
            </button>
          </div>
        </div>

        {mostrarFormulario && (
          <div className="bg-orange-50/50 p-6 border-b border-orange-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Agregar Nuevo Producto</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input 
                  type="text" 
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Taco al Pastor" 
                  className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Precio ($)</label>
                <input 
                  type="number" 
                  name="precio"
                  value={formData.precio}
                  onChange={handleChange}
                  placeholder="0.00" 
                  className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                <select 
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                >
                  <option value="Tacos">Tacos</option>
                  <option value="Bebidas">Bebidas</option>
                  <option value="Extras">Extras</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={handleGuardar}
                className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-md font-medium hover:bg-green-600 transition-colors"
              >
                <Save size={18} /> Guardar
              </button>
              <button 
                onClick={() => setMostrarFormulario(false)}
                className="flex items-center gap-2 bg-slate-500 text-white px-5 py-2 rounded-md font-medium hover:bg-slate-600 transition-colors"
              >
                <X size={18} /> Cancelar
              </button>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Producto</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Precio</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Categoría</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {productos.map((producto) => (
                  <tr key={producto._id} className="hover:bg-slate-50 transition-colors">
                    
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">
                      {producto.nombre}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-orange-500">
                      ${producto.precio.toFixed(2)}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full capitalize">
                        {producto.categoria}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-4">
                        <button className="text-blue-500 hover:text-blue-700 transition-colors">
                          <Pencil size={20} />
                        </button>
                        <button  type="button" onClick={()=>eliminarDatos(producto._id)} className="text-red-500 hover:text-red-700 transition-colors">
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}