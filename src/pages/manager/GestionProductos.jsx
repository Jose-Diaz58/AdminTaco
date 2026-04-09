import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import DatosBD from "../../services/Apidatos";

// Datos de prueba (MOCK DATA)
const mockProductos = [
  /*{ _id: '1', nombre: 'Taco al Pastor', precio: 15.00, categoria: 'Tacos' },
  { _id: '2', nombre: 'Taco de Asada de cerdo', precio: 15.00, categoria: 'Tacos' },
  { _id: '3', nombre: 'Taco de Asada de res', precio: 22.00, categoria: 'Tacos' },
  { _id: '4', nombre: 'Agua de Horchata', precio: 25.00, categoria: 'Bebidas' },
  { _id: '5', nombre: 'Quesadilla de Pastor', precio: 35.00, categoria: 'Quesadillas' },
  { _id: '6', nombre: 'Torta Pastor', precio: 65.00, categoria: 'Tortas' }*/
];

export function GestionProductos() {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = async () => {
    const datosbd = await DatosBD.getDatos();
    setProductos(datosbd.data);
  }

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <div className="w-full relative max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">

        <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Gestión de Productos</h2>
              <p className="text-orange-100 mt-1 text-sm md:text-base">
                {productos.length} productos en el catálogo
              </p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-white text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-50 transition-colors text-sm md:text-base">
              <Plus className="w-4 h-4 md:w-5 md:h-5" />Nuevo Producto
            </button>
          </div>
        </div>

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

                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">{producto.nombre}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-orange-500"> ${producto.precio.toFixed(2)}
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
                        <button className="text-red-500 hover:text-red-700 transition-colors">
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