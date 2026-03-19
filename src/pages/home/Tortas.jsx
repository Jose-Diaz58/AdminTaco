import React from 'react'
import { Productos } from '../../components/Datos/Productos'
import { Key } from 'lucide-react'

export function Tortas() {
  const Tortas=Productos.filter(dato=>dato.categoria==="Torta")
  console.log(Tortas)
  return (
    <div>
          {Tortas.map((tortas, index) => (
            <div key={index}>
              <h3>{tortas.nombre}</h3>
              <h3>{tortas.precio}</h3>
            </div>
          ))}
        </div>
  )
}
