import React from "react";
import { Productos } from "../../components/Datos/Productos";
import{useCarrito}from "../../components/Carrito"


export function Tacos() {
  const{agregar}=useCarrito();

  const Tacos = Productos.filter((dato) => dato.categoria === "Taco");
  console.log(Tacos);

  return (
    <div className="p-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {Tacos.map((taco) => (
        <button key={taco.id} onClick={()=>agregar(taco)}>{taco.nombre}-{taco.precio}</button>
      ))}
    </div>
  );
}