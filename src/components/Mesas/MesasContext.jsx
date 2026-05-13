import { createContext, useState, useContext, useEffect } from 'react'
import MesasBD from "../../services/ApiMesas"
import { data } from 'react-router';

const MesasContext = createContext();

export function MesasProvider({ children }) {
    const [mesas, setMesas] = useState([]);

    //mostrar las mesitas
    const obtenerMesas = async () => {
        const res = await MesasBD.getMesas();
        setMesas(res.data)
    }

    //añadir mesas
    const crearMesa = async (data) => {
        const res = await MesasBD.postMesas(data);
        obtenerMesas();
    }

    //eliminar
    const eliminarMesa = async (id) => {
        try {
            const res = await MesasBD.eliminarMesas(id);
            setMesas(mesas.filter((item) => item._id !== id))
        } catch (error) {
            console.error("Error al eliminar mesa:", error);
        }
    }

    //cambio de estado-ocupado-libre
    //ocupar
    const asignarMesa = async (id, pedido, total) => {
        await MesasBD.modificarMesa(id, {
            estado: "Ocupado",
            pedido,
            total
        })
        obtenerMesas();
    }

    //liberar
    const liberarMesa = async (id) => {
        try {
            await MesasBD.modificarMesa(id, {
                estado: "Libre",
                pedido: [],
                total: 0
            });
            // CORRECCIÓN CLAVE: Volver a pedir las mesas para que la pantalla se actualice a verde
            obtenerMesas();
        } catch (error) {
            console.error("Error al liberar mesa:", error);
        }
    }

    //para el header de mesas
    useEffect(() => {
        obtenerMesas();
        const actualizar = setInterval(obtenerMesas, 3000);
        return () => { clearInterval(actualizar) }
    }, []);

    return (
        <MesasContext.Provider value={{ mesas, obtenerMesas, crearMesa, eliminarMesa, asignarMesa, liberarMesa }}>{children}</MesasContext.Provider>
    )


}

export function useMesas() {
    return useContext(MesasContext)
}
