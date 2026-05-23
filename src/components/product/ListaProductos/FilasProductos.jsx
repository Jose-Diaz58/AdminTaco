import React from 'react';
import { Pencil, Trash2 } from "lucide-react";

export function FilasProductos({ producto, handleOpen, eliminarDatos }) {
  return (
    <tr className="bg-white rounded-xl shadow-sm border border-gray-200 md:border-none md:shadow-none md:rounded-none flex flex-col md:table-row md:hover:bg-slate-50 transition-colors">
      
      {/* Producto */}
      <td className="px-4 py-3 md:px-6 md:py-4 flex items-center justify-between md:table-cell border-b md:border-none border-gray-100">
        <span className="md:hidden text-xs font-bold text-gray-400 uppercase">Producto</span>
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 text-right md:text-left">
          <span className='text-2xl'>{producto.emoji || "🌮"}</span>
          <span>{producto.nombre}</span>
        </div>
      </td>

      {/* Precio */}
      <td className="px-4 py-3 md:px-6 md:py-4 flex items-center justify-between md:table-cell border-b md:border-none border-gray-100">
        <span className="md:hidden text-xs font-bold text-gray-400 uppercase">Precio</span>
        <span className="text-sm font-bold text-orange-500">
          ${producto.precio.toFixed(2)}
        </span>
      </td>

      {/* Categoría */}
      <td className="px-4 py-3 md:px-6 md:py-4 flex items-center justify-between md:table-cell border-b md:border-none border-gray-100">
        <span className="md:hidden text-xs font-bold text-gray-400 uppercase">Categoría</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full capitalize">
          {producto.categoria}
        </span>
      </td>

      {/* Acciones */}
      <td className="px-4 py-3 md:px-6 md:py-4 flex items-center justify-between md:table-cell">
        <span className="md:hidden text-xs font-bold text-gray-400 uppercase">Acciones</span>
        <div className="flex justify-end gap-3">
          <button 
            type="button" 
            onClick={() => handleOpen(producto)} 
            className="text-blue-500 hover:text-blue-700 bg-blue-50 md:bg-transparent p-2 md:p-0 rounded-lg md:rounded-none transition-colors"
          >
            <Pencil size={20} />
          </button>
          <button 
            type="button" 
            onClick={() => eliminarDatos(producto._id)} 
            className="text-red-500 hover:text-red-700 bg-red-50 md:bg-transparent p-2 md:p-0 rounded-lg md:rounded-none transition-colors"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
}