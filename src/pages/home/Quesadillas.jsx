import React from 'react'
import { Productos } from '../../components/Datos/Productos'
export function Quesadillas() {
    const Quesadillas=Productos.filter(dato=>dato.categoria==="Quesadilla")
    console.log(Quesadillas)
  return (
    <div>{Quesadillas.map((quesadillas, index) => (
                <div key={index}>
                  <h3>{quesadillas.nombre}</h3>
                  <h3>{quesadillas.precio}</h3>
                </div>
              ))}</div>
  )
}
