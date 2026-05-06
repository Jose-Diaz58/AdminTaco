
import { useState } from "react";
import { Productos } from "../../components/Datos/Productos";
import { useCarrito } from "../../components/Carrito/CarritoContext"

export function Home() {
  const { agregar } = useCarrito()
  return (
    <div className="p-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {Productos.map((producto) => (
          <button
            key={producto.id}
            onClick={() => agregar(producto)}
          >{producto.nombre}-{producto.precio}</button>
        ))}
      </div>
    </div>
  )
}
