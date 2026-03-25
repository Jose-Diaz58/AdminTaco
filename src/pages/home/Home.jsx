
import { useState } from "react";
import { Productos } from "../../components/Datos/Productos";

export function Home() {
  const [carrito, setCarrito] = useState([]);

  const agregar = (producto) => {
    const existe = carrito.find(item => item.id === producto.id);

    if (existe) {
      setCarrito(carrito.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const total = carrito.reduce((acumulado, item) => {
    return acumulado + item.precio * item.cantidad;
  }, 0);

  return (
    <div>
      {Productos.map((producto) => (
        <button key={producto.id} onClick={() => agregar(producto)}>
          {producto.nombre} - ${producto.precio}
        </button>
      ))}

      <h2>Pedido</h2>
      {carrito.map((item, index) => (
        <p key={index}>
          {item.nombre} x{item.cantidad} - ${item.precio * item.cantidad}
        </p>
      ))}
      <p>Total: ${total}</p>

    </div>

  );
}
