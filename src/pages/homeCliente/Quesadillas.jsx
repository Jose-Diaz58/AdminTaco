import React from 'react'
import { Productos } from '../../components/Datos/Productos'
import { useCarrito } from "../../components/Carrito"


export function Quesadillas() {
  const { agregar } = useCarrito();

  const Quesadillas = Productos.filter(dato => dato.categoria === "Quesadilla")
  console.log(Quesadillas)
  return (
    <div className="p-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {Quesadillas.map((quesa) => (
        <button key={quesa.id} onClick={() => agregar(quesa)}>{quesa.nombre}-{quesa.precio}</button>
      ))}
    </div>
  )
}
