
import { useState, useEffect } from "react";
import DatosBD from "../../services/Apidatos";
import { useCarrito } from "../../components/Carrito/CarritoContext"

export function Home() {
  const { agregar } = useCarrito();
  const [productosBD, setProductosBD] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await DatosBD.getDatos();
        setProductosBD(respuesta.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    obtenerProductos();
  }, []);

  return (
    <div className="p-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {productosBD.map((producto) => (
          <button
            className="bg-white rounded-xl p-4 flex flex-col  items-center gap-2 border border-transparent hover:border-orange-400 hover:shadow-md transition-all active:scale-95"
            key={producto._id}
            onClick={() => agregar(producto)}
          >
            <span className="text-4xl">{producto.emoji}</span>
            <span className="text-sm font-medium text-gray-800 self-start">{producto.nombre}</span>
            <span className="text-orange-500 font-bold text-sm self-start">${producto.precio}</span>
          </button>

        ))}
      </div>
    </div>
  )
}