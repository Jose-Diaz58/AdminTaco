import React from 'react'
import { useCarrito } from "../../components/Carrito"
import { useState, useEffect } from "react";
import DatosBD from "../../services/Apidatos";

export function Refrescos() {
  const { agregar } = useCarrito()
  const [refrescosBD, setRefrescosBD] = useState([]);

  useEffect(() => {
    const obtenerRefrescos = async () => {
      try {
        const respuesta = await DatosBD.getDatos();
        // Filtramos por la categoría "Refresco"
        const filtrados = respuesta.data.filter(dato => dato.categoria.toLowerCase() === "bebidas");
        setRefrescosBD(filtrados);
      } catch (error) {
        console.error("Error al obtener bebidas:", error);
      }
    };
    obtenerRefrescos();
  }, []);
  return (
    <div className="p-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {refrescosBD.map((refresco) => (
        <button
          className="bg-white rounded-xl p-4 flex flex-col  items-center gap-2 border border-transparent hover:border-orange-400 hover:shadow-md transition-all active:scale-95"
          key={refresco._id} onClick={() => agregar(refresco)}>
          <span className="text-4xl">{refresco.emoji}</span>
          <span className="text-sm font-medium text-gray-800 self-start">{refresco.nombre}</span>
          <span className="text-orange-500 font-bold text-sm self-start">${refresco.precio}</span>
        </button>))}
    </div>
  )
}
