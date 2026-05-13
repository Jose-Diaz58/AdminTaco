import React from 'react';
import { useMesas } from "./MesasContext";
import { useCarrito } from "../Carrito/CarritoContext";
import { X, Users, Utensils } from "lucide-react";
import Swal from "sweetalert2";

export function PanelMesas({ onClose }) {
  
  const { mesas, asignarMesa } = useMesas();
  const { carrito, total, limpiarCarrito } = useCarrito();

  const handleSeleccionarMesa = async (mesa) => {
    
    if (mesa.estado === "Ocupado") {
      Swal.fire("Mesa Ocupada", "Esta mesa ya tiene un pedido en curso", "error");
      return;
    }

    try {
      
      await asignarMesa(mesa._id, carrito, total);

      Swal.fire({
        icon: 'success',
        title: `Pedido enviado a Mesa #${mesa.numero}`,
        showConfirmButton: false,
        timer: 1500
      });


      limpiarCarrito();
      onClose();
    } catch (error) {
      console.error("Error al asignar mesa:", error);
      Swal.fire("Error", "No se pudo asignar el pedido a la mesa", "error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* encabezado del modal */}
        <div className="bg-orange-600 p-4 text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Utensils size={24} />
            <h2 className="text-xl font-bold">Seleccionar una Mesa</h2>
          </div>
          <button onClick={onClose} className="hover:bg-orange-700 p-1 rounded-full transition-colors">
            <X size={28} />
          </button>
        </div>

        {/*  Mesas */}
        <div className="p-6 overflow-y-auto bg-gray-50 flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {mesas.map((mesa) => (
              <button
                key={mesa._id}
                onClick={() => handleSeleccionarMesa(mesa)}
                className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 group ${
                  mesa.estado === "Libre" 
                    ? "border-green-100 bg-white hover:border-green-500 hover:shadow-lg" 
                    : "border-red-100 bg-red-50 opacity-60 cursor-not-allowed"
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                  mesa.estado === "Libre" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                }`}>
                  {mesa.numero}
                </div>
                
                <div className="text-center">
                  <span className="block font-bold text-gray-800 uppercase text-xs">Mesa {mesa.numero}</span>
                  <div className="flex items-center justify-center gap-1 text-gray-500 text-[10px]">
                    <Users size={12} />
                    <span>Capacidad: {mesa.capacidad}</span>
                  </div>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                  mesa.estado === "Libre" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
                }`}>
                  {mesa.estado}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer informativo */}
        <div className="p-4 bg-white border-t flex justify-between items-center">
          <p className="text-sm text-gray-500 italic">Haz clic en una mesa libre para asignar el pedido actual.</p>
          <div className="text-right">
            <p className="text-xs text-gray-400">Total del pedido:</p>
            <p className="text-lg font-bold text-orange-600">${total.toFixed(2)}</p>
          </div>
        </div>

      </div>
    </div>
  );
}