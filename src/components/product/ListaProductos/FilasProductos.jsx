import React from 'react';
import { Pencil, Trash2 } from "lucide-react";

export function FilasProductos({ producto, handleOpen, eliminarDatos }) {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">
        {producto.nombre}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-orange-500">
        ${producto.precio.toFixed(2)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full capitalize">
          {producto.categoria}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex justify-end gap-4">
          <button type="button" onClick={() => handleOpen(producto)} className="text-blue-500 hover:text-blue-700 transition-colors">
            <Pencil size={20} />
          </button>
          <button type="button" onClick={() => eliminarDatos(producto._id)} className="text-red-500 hover:text-red-700 transition-colors">
            <Trash2 size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
}