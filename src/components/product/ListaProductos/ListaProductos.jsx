import React from 'react';
import { FilasProductos } from './FilasProductos'; 

export function ListaProductos({ productos, handleOpen, eliminarDatos }) {
  return (
    <div className="w-full">
      <table className="w-full text-left border-collapse block md:table">
        <thead className="hidden md:table-header-group bg-white border-b border-gray-100">
          <tr>
            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Producto</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Precio</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Categoría</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Acciones</th>
          </tr>
        </thead>

        <tbody className="block md:table-row-group divide-y-0 md:divide-y md:divide-gray-100 space-y-4 md:space-y-0 p-4 md:p-0">
          {productos.map((producto) => (
            <FilasProductos key={producto._id} producto={producto} handleOpen={handleOpen} eliminarDatos={eliminarDatos} />
          ))}
        </tbody>
      </table>
    </div>
  );
}