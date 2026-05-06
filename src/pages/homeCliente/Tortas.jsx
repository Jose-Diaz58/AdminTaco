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
          <button key={torta.id} onClick={()=>agregar(torta)}>{torta.nombre}-{torta.precio}</button>
        ))}
      </div>
  )
}
