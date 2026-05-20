import { Calendar, Printer, Trash2 } from "lucide-react";

export function Controles({ fechaSeleccionada, setFechaSeleccionada, handleImprimirReporte, handleLimpiarCierre, ventasDia, totalTransacciones, totalVentas}) {
    
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6 print:border-none print:shadow-none">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4 md:mb-6 print:hidden">
        <div className="flex items-center gap-2 md:gap-3">
          <Calendar className="text-gray-600 w-5 h-5 md:w-6 md:h-6" />
          <span className="text-gray-800 font-medium text-sm md:text-base">Fecha:</span>
          <input
            type="date"
            value={fechaSeleccionada}
            onChange={(e) => setFechaSeleccionada(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1.5 md:px-4 md:py-2 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800 font-medium w-36 md:w-40 cursor-pointer text-sm md:text-base"
          />
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <button onClick={handleImprimirReporte} className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 md:px-5 md:py-2.5 rounded-lg font-medium transition-colors text-sm md:text-base">
            <Printer className="w-4 h-4 md:w-5 md:h-5" />
            Imprimir Reporte
          </button>
          <button onClick={handleLimpiarCierre} disabled={ventasDia.length === 0} className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-lg font-medium transition-all text-sm md:text-base ${ventasDia.length === 0 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-orange-600 hover:bg-orange-700 text-white shadow-sm"}`}>
            <Trash2 className="w-4 h-4 md:w-5 md:h-5" />Limpiar Cierre
          </button>
        </div>
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-lg p-3 md:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <h3 className="text-gray-800 text-base md:text-lg font-medium">Total del día seleccionado:</h3>
          <p className="text-gray-500 text-xs md:text-sm mt-1">{totalTransacciones} transacciones realizadas</p>
        </div>
        <div className="text-xl md:text-2xl font-bold text-orange-600">${totalVentas.toFixed(2)}</div>
      </div>
    </div>
  );
}