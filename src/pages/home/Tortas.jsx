import React from 'react'
import { Productos } from '../../components/Datos/Productos'
import{useCarrito}from "../../components/Carrito"

export function Tortas() {
  const {agregar}=useCarrito();

  const Tortas=Productos.filter(dato=>dato.categoria==="Torta")
  console.log(Tortas)
  return (
    <div className="p-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {Tortas.map((torta) => (
          <button 
          className="bg-white rounded-xl p-4 flex flex-col  items-center gap-2 border border-transparent hover:border-orange-400 hover:shadow-md transition-all active:scale-95"
          key={torta.id} onClick={()=>agregar(torta)}>
             <span className="text-4xl">{torta.emoji}</span>
          <span className="text-sm font-medium text-gray-800 self-start">{torta.nombre}</span>
          <span className="text-orange-500 font-bold text-sm self-start">${torta.precio}</span>
          </button>
        ))}
      </div>
  )
}
