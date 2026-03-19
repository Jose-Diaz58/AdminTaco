import { Header } from "../../components/Header";
import { NavLink } from "react-router";

export function ClienteLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {/* El que va home */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-orange-400 text-white px-3 py-1"
            : "bg-gray-200 text-black px-3 py-1 "
        }
      >
        Todos
      </NavLink>
      {/* Tacos */}
      <NavLink
        to="/Tacos"
        className={({ isActive }) =>
          isActive
            ? "bg-orange-400 text-white px-3 py-1"
            : "bg-gray-200 text-black px-3 py-1 "
        }
      >
        Tacos
      </NavLink>
      {/* Tortas */}
      <NavLink
        to="/Tortas"
        className={({ isActive }) =>
          isActive
            ? "bg-orange-400 text-white px-3 py-1"
            : "bg-gray-200 text-black px-3 py-1 "
        }
      >
        Tortas
      </NavLink>
      {/* Quesadilas */}
      <NavLink
        to="/Quesadillas"
        className={({ isActive }) =>
          isActive
            ? "bg-orange-400 text-white px-3 py-1"
            : "bg-gray-200 text-black px-3 py-1"
        }
      >
        Quesadillas
      </NavLink>
      {/* Refrescos */}
      <NavLink
        to="/Refrescos"
        className={({ isActive }) =>
          isActive
            ? "bg-orange-400 text-white px-3 py-1"
            : "bg-gray-200 text-black px-3 py-1 "
        }
      >
        Refrescos
      </NavLink>

      <main className="p-6">{children}</main>
    </div>
  );
}
//PD: ESTAN TODOS LOS NAVLINKS DE NAVEGACION
