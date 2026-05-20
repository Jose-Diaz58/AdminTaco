import { useCarrito } from "./CarritoContext";
import { ShoppingCart, Trash2, Plus, Minus, CreditCard } from "lucide-react";
import DatosBD from "../../services/Apidatos"
import Swal from "sweetalert2"
import { useState } from "react";
import { PanelMesas } from "../Mesas";

export function Carrito() {
  const { carrito, eliminar, cambiarCantidad, total, limpiarCarrito } = useCarrito();
  const [modalMesas, setModalMesas] = useState(false)

  const hayItems = carrito.length > 0
  const realizarCobro = async () => {
    try {
      const ticket = {
        productos: carrito,
        total: total
      };
      await DatosBD.postVenta(ticket);

      Swal.fire({
        position: "center",
        icon: 'success',
        title: 'Venta exitosa',
        text: 'El pedido se ha registrado en la caja',
        showConfirmButton: false,
        timer: 2000
      });

      limpiarCarrito();
    } catch (error) {
      console.error("Error al cobrar:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un problema al registrar la venta',
      });
    }
  };

  return (
    <aside className="w-90 h-full bg-white border-l border-gray-100 flex flex-col">

      {/* Header */}
      <div className=" bg-gray-100 p-4 border-b flex items-center gap-2">
        <ShoppingCart size={20} className="text-gray-500" />
        <h2 className="font-semibold text-gray-800">Pedido Actual</h2>
      </div>

      {/* Lista */}
      <div className="flex-1 overflow-y-auto p-3">
        {carrito.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-2">
            <ShoppingCart size={48} strokeWidth={1} />
            <p className="text-sm">Carrito vacío</p>
            <p className="text-xs text-center">Agrega productos para comenzar</p>
          </div>
        ) : (
          <ul className="space-y-2">
            {carrito.map((item) => (
              <li key={item._id} className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                <span className="text-xl">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-700 truncate">{item.nombre}</p>
                  <p className="text-xs text-orange-500 font-bold">${item.precio * item.cantidad}</p>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => cambiarCantidad(item._id, -1)} className="w-5 h-5 rounded-full bg-gray-200 hover:bg-orange-100 flex items-center justify-center">
                    <Minus size={10} />
                  </button>
                  <span className="text-xs font-bold w-4 text-center">{item.cantidad}</span>
                  <button onClick={() => cambiarCantidad(item._id, 1)} className="w-5 h-5 rounded-full bg-gray-200 hover:bg-orange-100 flex items-center justify-center">
                    <Plus size={10} />
                  </button>
                </div>
                <button onClick={() => eliminar(item._id)} className="text-gray-300 hover:text-red-400">
                  <Trash2 size={14} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Total y cobrar */}
      <div className="p-4 border-t space-y-3">
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span className="text-orange-500">${total.toFixed(2)}</span>
        </div>
        <button
          disabled={!hayItems}
          onClick={realizarCobro}
          className={`w-full py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all ${carrito.length > 0
            ? "bg-orange-500 hover:bg-orange-600 text-white"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
        >
          <CreditCard size={16} />
          COBRAR
        </button>
        <button
          disabled={!hayItems}
          onClick={() => setModalMesas(true)}
          className={`w-full py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all ${hayItems > 0
            ? "bg-orange-500 hover:bg-orange-600 text-white"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}>Comer aqui</button>
      </div>
      {modalMesas && (
        <PanelMesas onClose={() => setModalMesas(false)} />
      )}
    </aside>
  )
}