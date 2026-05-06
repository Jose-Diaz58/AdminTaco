import { Header } from "../../components";
import { Carrito } from "../../components/Carrito"
import { useCarrito } from "../../components/Carrito"
import { MenuCliente} from "../../components"

export function ClienteLayout({ children }) {
  const { carrito, eliminar, cambiarCantidad, total } = useCarrito()
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <MenuCliente/>
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
        <Carrito />
      </div>
    </div>
  );
}
//PD: ESTAN TODOS LOS NAVLINKS DE NAVEGACION