import React from 'react'
import { useCarrito } from "../../components/Carrito"
import { useState, useEffect } from "react";
import DatosBD from "../../services/Apidatos";


export function Quesadillas() {
  const { agregar } = useCarrito();

  const [quesadillasBD, setQuesadillasBD] = useState([]);

  useEffect(() => {
    const obtenerQuesadillas = async () => {
      try {
        const respuesta = await DatosBD.getDatos();
        // Filtramos por la categoría "Quesadillas"
        const filtrados = respuesta.data.filter(dato => dato.categoria.toLowerCase() === "quesadillas");
        setQuesadillasBD(filtrados);
      } catch (error) {
        console.error("Error al obtener quesadillas:", error);
      }
    };
    obtenerQuesadillas();
  }, []);

  return (
    <div className="p-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {quesadillasBD.map((quesa) => (
        <button
          className="bg-white rounded-xl p-4 flex flex-col  items-center gap-2 border border-transparent hover:border-orange-400 hover:shadow-md transition-all active:scale-95"
          key={quesa._id} onClick={() => agregar(quesa)}>
          <span className="text-4xl">{quesa.emoji}</span>
          <span className="text-sm font-medium text-gray-800 self-start">{quesa.nombre}</span>
          <span className="text-orange-500 font-bold text-sm self-start">${quesa.precio}</span>
        </button>
      ))}
    </div>
  )
}
