import React from 'react'
import { Productos } from '../../components/Datos/Productos'
import { useCarrito } from "../../components/Carrito"

export function Refrescos() {
  const { agregar } = useCarrito()
  const Refrescos = Productos.filter(dato => dato.categoria === "Refrescos")
    console.log("Refre")
  return (
    <div className="p-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {Refrescos.map((refresco) => (<button key={refresco.id} onClick={() => agregar(refresco)}>{refresco.nombre}-{refresco.precio}</button>))}
    </div>
  )
}
