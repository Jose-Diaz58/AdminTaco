import { createContext, useState, useContext } from 'react';
const CarritoContext = createContext();

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    //agregasao
    const agregar = (producto) => {
        const existe = carrito.find((item) => item.id === producto.id);

        if (existe) {
            setCarrito(carrito.map(item => item.id === producto.id
                ? { ...item, cantidad: item.cantidad + 1 } : item));
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }])
        }
    }
    //elimisao
    const eliminar = (id) => {
        setCarrito(carrito.filter((item) => item.id !== id))
    }
    //modificasao
    const cambiarCantidad = (id, delta) => {
        setCarrito(
            carrito
                .map((item) => item.id === id ? { ...item, cantidad: item.cantidad + delta } : item)
                .filter((item) => item.cantidad > 0)
        );
    }
    //limpiasao
    const limpiarCarrito = () => { setCarrito([]) }

    //totalsao
    const total = carrito.reduce((acumulado, item) => acumulado + item.precio * item.cantidad, 0)
    return (
        <CarritoContext.Provider value={{ carrito, agregar, eliminar, cambiarCantidad, limpiarCarrito, total }}>{children}</CarritoContext.Provider>
    )
}
export function useCarrito() {
    return useContext(CarritoContext)
}