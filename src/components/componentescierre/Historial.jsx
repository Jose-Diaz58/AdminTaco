export function Historial({ ventasDia, fechaSeleccionada }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
      <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-bold">Historial de ventas - {fechaSeleccionada}</h2>
      </div>
      <div className="p-0 overflow-x-auto">
        {ventasDia.length === 0 ? (
          <p className="text-center text-gray-500 py-8 text-sm md:text-base">No hay ventas registradas para este día.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-3">Hora</th>
                <th className="px-6 py-3">Productos</th>
                <th className="px-6 py-3 text-right">Monto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {ventasDia.map((venta) => (
                <tr key={venta._id} className="hover:bg-orange-50/50 transition-colors">
                  <td className="px-6 py-4 text-gray-500 whitespace-nowrap align-top">
                    {new Date(venta.fecha).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      {venta.productos.map((p, i) => (
                        <span key={i} className="text-gray-700 text-xs sm:text-sm">
                          <span className="text-orange-500 font-bold w-6 inline-block">x{p.cantidad}</span>
                          {p.nombre}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-gray-800 whitespace-nowrap align-top">
                    ${venta.total.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}