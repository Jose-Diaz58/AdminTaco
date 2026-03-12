import React from 'react'
import { useState } from 'react'
import { Productos } from '../../components/Datos/Productos';

export function Home() {
  const [contador, setcontador] = useState(0);
  const Preciotaco = 15
const Vendertaco=()=>setcontador(contador+1);
const QuitarTaco=()=>setcontador(contador-1)

  return (
    <div> Prueba </div>
  //  <div >
  //   <h1>Precio del taco: $15 c/u</h1>
  //   <h2>Tacos pedidos: {contador}</h2>
  //   <h2>Total a pagar: {contador*Preciotaco}</h2>
  //   <h3>
  //     <button  onClick={Vendertaco}
  //     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
  //     <button onClick={QuitarTaco}>-</button>
  //   </h3>
  //   </div>
    
  )
}
