import React from 'react'
import { Productos } from '../../components/Datos/Productos'

export function Tortas() {
  const Tortas=Productos.filter(dato=>dato.categoria==="Torta")
  console.log(Tortas)
  return (
    <div>Tortas tortas</div>
  )
}
