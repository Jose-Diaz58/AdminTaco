import React from "react";
import { Productos } from "../../components/Datos/Productos";
export function Tacos() {
  const Tacos = Productos.filter((dato) => dato.categoria === "Taco");
  console.log(Tacos);

  return (
    <div>
      {Tacos.map((taco, index) => (
        <div key={index}>
          <h3>{taco.nombre}</h3>
          <h3>{taco.precio}</h3>
        </div>
      ))}
    </div>
  );
}

//prueba con ayuda de ia