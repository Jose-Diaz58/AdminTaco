// src/components/menu/MenuCliente.jsx
import { LogOut } from "lucide-react";

export function MenuCliente() {
  return (
    <div className="w-full flex flex-col shrink-0">
      {/* Barra superior principal */}
      <div className="bg-orange-600 text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-bold leading-none">Taquería AdminTaco</h1>
          <p className="text-sm text-orange-100 mt-1">Punto de Venta</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-right">
            <p className="text-xs text-orange-100">Usuario</p>
            <p className="font-bold leading-none">Cliente</p>
          </div>
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition-colors border border-red-500">
            <LogOut size={18} />
            <span className="hidden sm:inline">Salir</span>
          </button>
        </div>
      </div>

      {/* Sección de Mesas */}
      <div className="bg-orange-500 p-3 md:p-4 flex items-center gap-4 overflow-x-auto whitespace-nowrap">
        <span className="text-white font-medium flex items-center gap-2">
          Mesa:
        </span>
        <div className="flex gap-2 items-center">
          <button className="bg-white text-orange-600 px-4 py-1.5 rounded-full font-medium text-sm">Para llevar</button>
          <button className="bg-orange-400 text-white hover:bg-orange-300 px-4 py-1.5 rounded-full font-medium text-sm transition-colors">Mesa #1</button>
          <button className="bg-red-500 text-white px-4 py-1.5 rounded-full font-medium text-sm flex items-center gap-2">
            Mesa #2
            <span className="w-2 h-2 rounded-full bg-white"></span>
          </button>
          <button className="bg-orange-400 text-white hover:bg-orange-300 px-4 py-1.5 rounded-full font-medium text-sm transition-colors">Mesa #3</button>
          <button className="bg-orange-400 text-white hover:bg-orange-300 px-4 py-1.5 rounded-full font-medium text-sm transition-colors">Mesa #5</button>
          <button className="bg-orange-400 text-white hover:bg-orange-300 px-4 py-1.5 rounded-full font-medium text-sm transition-colors">Mesa #6</button>
        </div>
      </div>
    </div>
  );
}