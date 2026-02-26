import { useState } from 'react'
import Formularios from './components/Formularios';

const Mensaje=()=>{
  return<h2>Precio del taco: $15 c/U</h2>;
};
function App() {
  const [contador, setcontador] = useState(0);
  const Preciotaco = 15

const Vendertaco=()=>setcontador(contador+1);
const QuitarTaco=()=>setcontador(contador-1)

  return (
    <>
    <div>
      <Mensaje/>
    </div>
    <h3>Tacos pedidos: {contador}</h3>
    <h3>Total a pagar: {contador*Preciotaco}</h3>
    <h3>
      <button onClick={Vendertaco}>+</button>
      <button onClick={QuitarTaco}>-</button>
    </h3>
    <div>
      <Formularios/>
    </div>
    </>
    
  )
}

export default App