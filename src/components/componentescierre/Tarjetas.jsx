import { DollarSign, ShoppingBag, TrendingUp } from "lucide-react";

export function Tarjetas({ totalVentas, totalTransacciones, ticketPromedio }) {
  const stats = [
    { id: 1, label: "Total Ventas", value: `$${totalVentas.toFixed(2)}`, icon: <DollarSign className="w-6 h-6 md:h-8 text-green-600" />, textColor: "text-green-600", bgcolor: "bg-green-100" },
    { id: 2, label: "Transacciones", value: `${totalTransacciones}`, icon: <ShoppingBag className="w-6 h-6 md:h-8 text-blue-600" />, textColor: "text-blue-600", bgcolor: "bg-blue-100" },
    { id: 3, label: "Ticket Promedio", value: `$${ticketPromedio.toFixed(2)}`, icon: <TrendingUp className="text-orange-600" />, textColor: "text-orange-600", bgcolor: "bg-orange-100" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
      {stats.map((item) => (
        <div key={item.id} className="flex items-center justify-between p-4 md:p-6 bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="flex flex-col">
            <p className="text-xs md:text-sm font-medium text-gray-600">{item.label}</p>
            <p className={`text-2xl md:text-3xl font-bold mt-1 ${item.textColor}`}>{item.value}</p>
          </div>
          <div className={`flex items-center justify-center p-2 md:p-3 rounded-full ${item.bgcolor}`}>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}