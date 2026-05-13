import React from 'react'
import DatosBD from "../../services/Apidatos";
import { Users, Pencil, Trash2 ,BanknoteArrowDown} from "lucide-react"
import Swal from 'sweetalert2';

export function MesasGestion({ mesas, handleOpen, eliminarMesa, liberarMesa ,obtenerMesas}) {

  //mensaje de elimiar mesa
  const deleteMesa = (id) => {
    Swal.fire({
      title: "Elimar esta mesa?",
      text: "No se podra recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!"
    }).then((async (result) => {
      if (result.isConfirmed) {
        eliminarMesa(id)
      } Swal.fire({
        title: "Eliminado!",
        text: "Se borro correctaente.",
        icon: "success"
      });
    }));
  }

  //cobro de mesa
  const cobrarMesa = async (mesa) => {
    Swal.fire({
      title: `¿Cobrar Mesa #${mesa.numero}?`,
      text: `Total a cobrar: $${mesa.total}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#ea580c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cobrar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await DatosBD.postVenta({
            productos: mesa.pedido,
            total: mesa.total
          });

          // CORRECCIÓN: Solo necesitamos pasarle el ID de la mesa
          await liberarMesa(mesa._id);
          Swal.fire({
            title: "¡Venta exitosa!",
            text: `Mesa #${mesa.numero} liberada correctamente`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false
          });
        } catch (error) {
          Swal.fire({ title: "Error", text: "No se pudo cobrar la mesa", icon: "error" });
        }
      }
    });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
      {mesas.map((mesa) => (
        <div
          key={mesa._id}
          className={`relative group bg-white rounded-2xl border-2 p-5 transition-all hover:shadow-md ${
            mesa.estado === "Libre" ? "border-green-100" : "border-red-100"
          }`}
        >
          {/* Indicador de Estado (Puntito verde o rojo) */}
          <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${
            mesa.estado === "Libre" ? "bg-green-500" : "bg-red-500"
          }`} />

          <div className="flex flex-col items-center gap-3">
            {/* Círculo con el número de mesa */}
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold ${
              mesa.estado === "Libre" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
            }`}>
              {mesa.numero}
            </div>

            {/* Información de la mesa */}
            <div className="text-center">
              <h3 className="font-bold text-gray-800">Mesa #{mesa.numero}</h3>
              <div className="flex items-center justify-center gap-1 text-gray-500 text-sm">
                <Users size={14} />
                <span>Capacidad: {mesa.capacidad}</span>
              </div>
            </div>

            {/* Acciones Generales (Editar/Eliminar) */}
            <div className="flex gap-4 mt-2">
              <button
                onClick={() => handleOpen(mesa)}
                className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                title="Editar"
              >
                <Pencil size={18} />
              </button>
              <button
                onClick={() => deleteMesa(mesa._id)}
                className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                title="Eliminar"
              >
                <Trash2 size={18} />
              </button>
            </div>

            {/* SECCIÓN DE COBRO: Solo aparece si la mesa está ocupada */}
            {mesa.estado === "Ocupado" && (
              <div className="w-full text-center mt-3 border-t pt-3 border-gray-100">
                <p className="text-sm font-bold text-gray-700 mb-2">Total: ${mesa.total}</p>
                <button
                  onClick={() => cobrarMesa(mesa)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-sm transition-colors active:scale-95 cursor-pointer"
                >
                  <BanknoteArrowDown size={18} />
                  Cobrar
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
