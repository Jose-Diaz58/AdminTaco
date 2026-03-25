// import { useState } from "react";
// import Productos from "../../Datos/Productos";

// export function FuncionCarrito() {
//   const [contador, setcontador] = useState([]);
//   const agregar = (producto) => {
//     setcontador([...contador, producto]);
//   };
//   const total = contador.reduce((acumulado, dato) => {
//     return acumulado + dato.precio;
//   }, 0);
//   return (
//     <div>
//       {Productos.map((producto) => (
//         <button key={producto.id} onClick={() => agregar(producto)}>
//           {producto.nombre}- ${producto.precio}
//         </button>
//       ))}
//       <p>Total:${total}</p>
//     </div>
//   );
// }

