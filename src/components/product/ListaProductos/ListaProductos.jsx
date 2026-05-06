import React from 'react';
import { FilasProductos } from './FilasProductos'; 

export function ListaProductos({ productos, handleOpen, eliminarDatos }) {
  return (
    <table className="w-full text-left border-collapse">
      <thead className="bg-white border-b border-gray-100">
        <tr>
          <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Producto</th>
          <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Precio</th>
          <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Categoría</th>
          <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Acciones</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {productos.map((producto) => (
          <FilasProductos key={producto._id} producto={producto} handleOpen={handleOpen} eliminarDatos={eliminarDatos} />
        ))}
      </tbody>
    </table>
  );
}