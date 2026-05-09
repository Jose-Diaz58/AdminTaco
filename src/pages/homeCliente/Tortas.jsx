import React from 'react'
import{useCarrito}from "../../components/Carrito"
import { useState, useEffect } from "react";
import DatosBD from "../../services/Apidatos";

export function Tortas() {
  const {agregar}=useCarrito();

  const [tortasBD, setTortasBD] = useState([]);

  useEffect(() => {
    const obtenerTortas = async () => {
      try {
        const respuesta = await DatosBD.getDatos();
        // Filtramos por la categoría "Tortas"
        const filtrados = respuesta.data.filter(dato => dato.categoria.toLowerCase() === "tortas");
        setTortasBD(filtrados);
      } catch (error) {
        console.error("Error al obtener tortas:", error);
      }
    };
    obtenerTortas();
  }, []);
  return (
    <div className="p-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {tortasBD.map((torta) => (
          <button 
          className="bg-white rounded-xl p-4 flex flex-col  items-center gap-2 border border-transparent hover:border-orange-400 hover:shadow-md transition-all active:scale-95"
          key={torta._id} onClick={()=>agregar(torta)}>
             <span className="text-4xl">{torta.emoji}</span>
          <span className="text-sm font-medium text-gray-800 self-start">{torta.nombre}</span>
          <span className="text-orange-500 font-bold text-sm self-start">${torta.precio}</span>
          </button>
        ))}
      </div>
  )
}
