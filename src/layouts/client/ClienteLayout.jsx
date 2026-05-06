import { Header } from "../../components";
import { NavLink } from "react-router";

export function ClienteLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">{children}</main>
    </div>
  );
}
//PD: ESTAN TODOS LOS NAVLINKS DE NAVEGACION
