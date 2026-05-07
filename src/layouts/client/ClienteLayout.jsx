import { Header, SubHeader } from "../../components";
import { Carrito } from "../../components/Carrito"
import { useCarrito } from "../../components/Carrito"

export function ClienteLayout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1 overflow-hidden">

        {/*subheader*/}
        <div className="flex flex-col flex-1 overflow-hidden">
          <SubHeader />
          <main className="flex-1 overflow-y-auto p-4">
            {children}
          </main>
        </div>

        <Carrito />

      </div>
    </div>
  );
}
//PD: ESTAN TODOS LOS NAVLINKS DE NAVEGACION