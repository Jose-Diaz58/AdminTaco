import { useMesas } from "../Mesas/MesasContext";
import DatosBD from "../../services/Apidatos";
import Swal from "sweetalert2";
import { BanknoteArrowDown } from "lucide-react";

export function HeaderMesa() {
  const { mesas, liberarMesa } = useMesas();

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
          await DatosBD.postVenta({ productos: mesa.pedido, total: mesa.total });
          await liberarMesa(mesa._id);
          Swal.fire({ title: "¡Venta exitosa!", icon: "success", timer: 2000, showConfirmButton: false });
        } catch (error) {
          Swal.fire({ title: "Error", text: "No se pudo cobrar la mesa", icon: "error" });
        }
      }
    });
  };

  return (
    <div className="bg-orange-500 px-6 py-2 flex items-center gap-3 overflow-x-auto no-scrollbar border-t border-orange-400">
      <span className="text-white font-semibold text-sm whitespace-nowrap">🍽️ Mesas:</span>
      {mesas.map((mesa) => (
        <div
          key={mesa._id}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${
            mesa.estado === "Libre"
              ? "bg-orange-400 text-white"
              : "bg-white text-orange-600"
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${
            mesa.estado === "Libre" ? "bg-green-400" : "bg-orange-500"
          }`} />
          Mesa #{mesa.numero}
          {/* Botón cobrar si está ocupada */}
          {mesa.estado === "Ocupado" && (
            <button
              onClick={() => cobrarMesa(mesa)}
              className="ml-2 flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white px-2 py-0.5 rounded-full text-xs font-bold transition-colors"
            >
              <BanknoteArrowDown size={12} />
              Cobrar
            </button>
          )}
        </div>
      ))}
    </div>
  );
}