import React from 'react'
import { Productos } from '../../components/Datos/Productos'
export  function Tacos() {
    Productos.map((dato)=>console.log(dato.nombre))

    return (

    <div>Tacos</div>
  )
}
