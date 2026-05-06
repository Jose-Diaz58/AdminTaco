import { useEffect, useState } from "react";
import { Plus, X} from "lucide-react";
import Axios from "axios";
import DatosBD from "../../services/Apidatos";
import Swal from "sweetalert2";
import { FormProducto, ListaProductos } from "../../components/product";
import { Dialog } from "@headlessui/react";

export function GestionProductos() {
  const [productos, setProductos] = useState([]);

  const [isOpen, setIsOpen] = useState(false)
  const [productoMod, setProductoMod] = useState(null);

  const handleOpen = (producto = null) => {
    setProductoMod(producto);
    setIsOpen(!isOpen);
  }

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
      confirmButtonColor: "#ea580c",
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

  return (
    <div className="w-full relative max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">

        <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Gestión de Productos</h2>
              <p className="text-orange-100 mt-1 text-sm md:text-base"> {productos.length} productos en el catálogo</p>
            </div>
            <button onClick={() => handleOpen()} className="flex items-center justify-center gap-2 bg-white text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-50 transition-colors text-sm md:text-base"
            ><Plus className="w-4 h-4 md:w-5 md:h-5" />Nuevo Producto
            </button>
          </div>
        </div>

        <Dialog open={isOpen} onClose={() => handleOpen()} className="relative z-50">
          <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="relative bg-white rounded-xl shadow-2xl p-6 w-full max-w-md border border-gray-100">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-2">
                <Dialog.Title className="text-lg font-bold text-gray-800">
                  {productoMod ? "Editar Producto" : "Nuevo Producto"}
                </Dialog.Title>
                <button onClick={() => handleOpen()} className="text-gray-400 hover:text-gray-600">
                  <X size={20} />
                </button>
              </div>
              <FormProducto closeModal={() => handleOpen()} obtenerProductos={obtenerProductos} datos={productoMod}/>
            </Dialog.Panel>
          </div>
        </Dialog>

        <div className="overflow-x-auto">
          <ListaProductos productos={productos} handleOpen={handleOpen} eliminarDatos={eliminarDatos}/>
        </div>
      </div>
    </div>
  );
}