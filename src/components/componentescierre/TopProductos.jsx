export function TopProductos({ topProductos }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
      <div className="bg-linear-to-r from-purple-500 to-purple-600 text-white p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-bold">Top 5 Productos Más Vendidos</h2>
      </div>
      <div className="p-4 md:p-6 space-y-3 md:space-y-4">
        {topProductos.length === 0 ? (
        <p className="text-center text-gray-500 py-8 text-sm md:text-base">No hay nada xd</p>
        ) : (
          topProductos.map((producto, index) => (
            <div key={index} className="flex items-center justify-between p-3 md:p-4 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="flex items-center gap-3 md:gap-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold text-sm md:text-base shrink-0">
                  #{index + 1}
                </div>
                <div className="text-2xl md:text-3xl shrink-0">
                  {producto.emoji}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800 text-sm md:text-base">{producto.nombre}</span>
                  <span className="text-gray-500 text-xs md:text-sm">{producto.cantidad} unidades vendidas</span>
                </div>
              </div>
              <div className="text-purple-600 font-bold text-lg md:text-xl whitespace-nowrap ml-2">
                ${producto.total.toFixed(2)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}