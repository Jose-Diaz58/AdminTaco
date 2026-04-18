import { useState } from "react";
import {DollarSign,ShoppingBag,TrendingUp,Calendar,Printer,Trash2,} from "lucide-react";

export function CierreCaja() {
  
  const hoy = new Date().toISOString().split("T")[0];
  const [fechaSeleccionada, setFechaSeleccionada] = useState(hoy);

  const stats = [
    {id: 1,label: "Total Ventas",value: "$0.00",icon: <DollarSign className="w-6 h-6 md:h-8 text-green-600"/>,textColor: "text-green-600",bgcolor: "bg-green-100",},
    {id: 2,label: "Transacciones",value: "0",icon: <ShoppingBag className="w-6 h-6 md:h-8 text-blue-600"/>,textColor: "text-blue-600",bgcolor: "bg-blue-100",},
    {id: 3,label: "Ticket Promedio",value: "$0.00",icon: <TrendingUp className="text-orange-600" />,textColor: "text-orange-600",bgcolor: "bg-orange-100",},
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 md:p-6 bg-white rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex flex-col">
              <p className="text-xs md:text-sm font-medium text-gray-600">
                {item.label}
              </p>
              <p className={`text-2xl md:text-3xl font-bold mt-1 ${item.textColor}`}>
                {item.value}
              </p>
            </div>
            <div
              className={`flex items-center justify-center p-2 md:p-3 rounded-full ${item.bgcolor}`}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4 md:mb-6">
          <div className="flex items-center gap-2 md:gap-3">
            <Calendar className="text-gray-600 w-5 h-5 md:w-6 md:h-6" />
            <span className="text-gray-800 font-medium text-sm md:text-base">
              Fecha:
            </span>
            <input
              type="date"
              value={fechaSeleccionada}
              onChange={(e) => setFechaSeleccionada(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1.5 md:px-4 md:py-2 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800 font-medium w-36 md:w-40 cursor-pointer text-sm md:text-base"
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 md:px-5 md:py-2.5 rounded-lg font-medium transition-colors text-sm md:text-base">
              <Printer className="w-4 h-4 md:w-5 md:h-5" />
              Imprimir Reporte
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 md:px-5 md:py-2.5 rounded-lg font-medium transition-colors text-sm md:text-base">
              <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
              Limpiar Cierre
            </button>
          </div>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-lg p-3 md:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 className="text-gray-800 text-base md:text-lg font-medium">
              Total del día seleccionado:
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              0 transacciones realizadas
            </p>
          </div>
          <div className="text-xl md:text-2xl font-bold text-orange-600">
            $0.00
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
        <div className="bg-linear-to-r from-purple-500 to-purple-600 text-white p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold">Top 5 Productos Más Vendidos</h2>
        </div>
        <div className="p-4 md:p-6">
          <p className="text-center text-gray-500 py-8 text-sm md:text-base">No hay nada xd</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
        <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold">Historial de ventas - {fechaSeleccionada}</h2>
        </div>
        <div className="p-4 md:p-6">
          <p className="text-center text-gray-500 py-8 text-sm md:text-base">No hay ventas gente coda</p>
        </div>
      </div>
    </div>
  );
}