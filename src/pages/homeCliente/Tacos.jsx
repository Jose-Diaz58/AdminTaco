import React from "react";
import { useCarrito } from "../../components/Carrito";
import { useState, useEffect } from "react";
import DatosBD from "../../services/Apidatos";


export function Tacos() {
  const { agregar } = useCarrito();
  const [tacosBD, setTacosBD] = useState([]);

  useEffect(() => {
    const obtenerTacos = async () => {
      try {
        const respuesta = await DatosBD.getDatos();
        // Filtramos por la categoría "Tacos"
        const filtrados = respuesta.data.filter(dato => dato.categoria.toLowerCase() === "tacos");
        setTacosBD(filtrados);
      } catch (error) {
        console.error("Error al obtener tacos:", error);
      }
    };
    obtenerTacos();
  }, []);

  return (
    <div className="p-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {tacosBD.map((taco) => (
        <button
          className="bg-white rounded-xl p-4 flex flex-col  items-center gap-2 border border-transparent hover:border-orange-400 hover:shadow-md transition-all active:scale-95"
          key={taco._id} onClick={() => agregar(taco)}>
          <span className="text-4xl">{taco.emoji}</span>
          <span className="text-sm font-medium text-gray-800 self-start">{taco.nombre}</span>
          <span className="text-orange-500 font-bold text-sm self-start">${taco.precio}</span>
        </button>
      ))}
    </div>
  );
}