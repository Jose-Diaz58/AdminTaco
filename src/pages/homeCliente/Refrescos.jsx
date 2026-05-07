import React from 'react'
import { Productos } from '../../components/Datos/Productos'
import { useCarrito } from "../../components/Carrito"

export function Refrescos() {
  const { agregar } = useCarrito()
  const Refrescos = Productos.filter(dato => dato.categoria === "Refrescos")
  console.log("Refre")
  return (
    <div className="p-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {Refrescos.map((refresco) => (
        <button
          className="bg-white rounded-xl p-4 flex flex-col  items-center gap-2 border border-transparent hover:border-orange-400 hover:shadow-md transition-all active:scale-95"
          key={refresco.id} onClick={() => agregar(refresco)}>
          <span className="text-4xl">{refresco.emoji}</span>
          <span className="text-sm font-medium text-gray-800 self-start">{refresco.nombre}</span>
          <span className="text-orange-500 font-bold text-sm self-start">${refresco.precio}</span>
        </button>))}
    </div>
  )
}
