import { useState, useEffect } from "react";
import DatosBD from "../../services/Apidatos";
import { DollarSign } from "lucide-react";
import Swal from "sweetalert2";
import { Tarjetas, Historial, TopProductos, Controles } from "../../components/componentescierre";

export function CierreCaja() {
  const hoy = new Date().toISOString().split("T")[0];
  const [fechaSeleccionada, setFechaSeleccionada] = useState(hoy);
  const [ventasDia, setVentasDia] = useState([]);

  useEffect(() => {
    const cargarVentas = async () => {
      try {
        const respuesta = await DatosBD.getVentasPorFecha(fechaSeleccionada);
        setVentasDia(respuesta.data);
      } catch (error) {
        console.error("Error al cargar las ventas", error);
      }
    };
    cargarVentas();
  }, [fechaSeleccionada]);

  // Cálculos lógicos
  const totalVentas = ventasDia.reduce((acumulador, venta) => acumulador + venta.total, 0);
  const totalTransacciones = ventasDia.length;
  const ticketPromedio = totalTransacciones > 0 ? (totalVentas / totalTransacciones) : 0;

  const obtenerTopProductos = () => {
    const conteo = {};
    ventasDia.forEach(venta => {
      venta.productos.forEach(producto => {
        if (conteo[producto.nombre]) {
          conteo[producto.nombre].cantidad += producto.cantidad;
          conteo[producto.nombre].total += (producto.precio * producto.cantidad);
        } else {
          conteo[producto.nombre] = {
            nombre: producto.nombre,
            cantidad: producto.cantidad,
            total: producto.precio * producto.cantidad,
            emoji: producto.emoji || "🌮" 
          };
        }
      });
    });

    const arregloTop = Object.values(conteo);
    return arregloTop.sort((a, b) => b.cantidad - a.cantidad).slice(0, 5);
  };

  const topProductos = obtenerTopProductos();
  
  const handleImprimirReporte = () => {
    window.print();
  };

  const handleLimpiarCierre = async () => {
    if (ventasDia.length === 0) return;

    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: `Se borrarán permanentemente todas las ventas del día ${fechaSeleccionada}. Esta acción no se puede deshacer.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ea580c',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Sí, borrar todo',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        await DatosBD.eliminarVentasPorFecha(fechaSeleccionada);
        setVentasDia([]);
        
        Swal.fire('¡Borrado!', 'El cierre del día ha sido limpiado correctamente.', 'success');
      } catch (error) {
        Swal.fire('Error', 'Hubo un problema al borrar los datos.', 'error');
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-4 md:space-y-6">

      <div className="hidden print:block bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-5">
        <div className="flex items-center gap-2 mb-2 text-orange-600">
          <DollarSign className="w-6 h-6 font-bold"/>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Cierre de Caja</h1>
        </div>
      </div>

      <Tarjetas totalVentas={totalVentas} totalTransacciones={totalTransacciones} ticketPromedio={ticketPromedio} />

      <Controles fechaSeleccionada={fechaSeleccionada} setFechaSeleccionada={setFechaSeleccionada} handleImprimirReporte={handleImprimirReporte} handleLimpiarCierre={handleLimpiarCierre} ventasDia={ventasDia} totalTransacciones={totalTransacciones} totalVentas={totalVentas} />

      <TopProductos topProductos={topProductos} />

      <Historial   ventasDia={ventasDia} fechaSeleccionada={fechaSeleccionada} />
    </div>
  );
}