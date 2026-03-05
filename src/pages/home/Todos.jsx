import React from 'react'
import { Productos } from '../../components/Datos/Productos'

export  function Todos() {
  Productos.map((dato)=>console.log(dato))
  return (
    <div>Todos</div>
  )
}
