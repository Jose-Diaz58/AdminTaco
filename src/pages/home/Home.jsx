import React from "react";
import { useState } from "react";
import { Productos } from "../../components/Datos/Productos";
// import { FuncionCarrito } from "../../components/Funcion/FuncionCarrito";

export function Home({children}) {
  const [carrito, setCarrito] = useState([]);
  const agreagar = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const total = carrito.reduce((acumulado, item) => {
    return acumulado + item.precio;
  }, 0);
  return (
    <div>
      {Productos.map((producto) => (
        <button key={producto.id} onClick={() => agreagar(producto)}>
          {producto.nombre}-${producto.precio}
        </button>
      ))}
      <h2>Pedido</h2>
      {carrito.map((item, index) => (
        <p key={index}>
          {item.nombre} - ${item.precio}
        </p>
      ))}
      <p>Total: ${total}</p>
      <main className="p-6">{children}</main>
    </div>
    
  );
}
