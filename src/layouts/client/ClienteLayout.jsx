import { Header, SubHeader,HeaderMesa } from "../../components";
import { Carrito } from "../../components/Carrito"
import { useCarrito } from "../../components/Carrito"
import { ShoppingCart } from "lucide-react" 

export function ClienteLayout({ children }) {
  const { setIsCartOpen, carrito } = useCarrito();

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div className="flex flex-col h-screen bg-gray-100 relative">
      <Header />
      <HeaderMesa />
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

      <button
        onClick={() => setIsCartOpen(true)}
        className="md:hidden absolute bottom-6 right-6 z-30 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 active:scale-95 transition-all"
      >
        <ShoppingCart size={24} />
        {/* Indicador de productos agregados */}
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-gray-100">
            {totalItems}
          </span>
        )}
      </button>
    </div>
  );
}
//PD: ESTAN TODOS LOS NAVLINKS DE NAVEGACION