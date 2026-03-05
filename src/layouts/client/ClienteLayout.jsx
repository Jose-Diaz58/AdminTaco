import { Header } from "../../components/Header";
import { NavLink } from "react-router";

export function ClienteLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <NavLink
        to="/Todos"
        className={({ isActive }) =>
          isActive
            ? "bg-orange-400 text-white px-3 py-1"
            : "bg-gray-200 text-black px-3 py-1 "
        }
      >
        Todos
      </NavLink>
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
//esta vaina es seria goku
