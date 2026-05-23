import { createContext, useState, useContext } from 'react';
const CarritoContext = createContext();

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    //agregasao
    const agregar = (producto) => {
        const prodId = producto._id
        const existe = carrito.find((item) => item._id === prodId);

        if (existe) {
            setCarrito(carrito.map(item => item._id === prodId
                ? { ...item, cantidad: item.cantidad + 1 } : item));
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }])
        }
    }
    //elimisao
    const eliminar = (id) => {
        setCarrito(carrito.filter((item) => item._id !== id))
    }
    //modificasao
    const cambiarCantidad = (id, delta) => {
        setCarrito(
            carrito
                .map((item) => item._id === id ? { ...item, cantidad: item.cantidad + delta } : item)
                .filter((item) => item.cantidad > 0)
        );
    }
    //limpiasao
    const limpiarCarrito = () => { setCarrito([]) }

    //totalsao
    const total = carrito.reduce((acumulado, item) => acumulado + item.precio * item.cantidad, 0)

    const carritofunction = {
        carrito,
        agregar, eliminar, cambiarCantidad, limpiarCarrito, total, isCartOpen, setIsCartOpen
    }
    return (
        <CarritoContext.Provider value={carritofunction}>{children}</CarritoContext.Provider>
    )
}
export function useCarrito() {
    return useContext(CarritoContext)
}