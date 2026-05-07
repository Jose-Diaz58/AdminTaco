import React from "react";
import { NavLink } from "react-router";
export function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-4 py-2">

        <div className="flex items-center gap-2 text-orange-500 font-bold text-xl">
          🌮<span>Taqueria el amigo Abraham</span>
        </div>
        <button className="text-2xl text-gray-700 hover:text-orange-500">
          {" "}
          ☰
        </button>
      </div>

      <nav className="flex gap-3 px-6 pb-4 overflow-x-auto no-scrollbar">
        <NavLink
          to="/Inicio"
          end
          className={({ isActive }) =>
            "px-4 py-2 rounded-2xl font-semibold transition-colors whitespace-nowrap " +
            (isActive
              ? "bg-orange-400 text-white shadow-md"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200")
          }
        >
          Todos
        </NavLink>
        {/* Tacos */}
        <NavLink
          to="/Tacos"
          end
          className={({ isActive }) =>
            "px-4 py-2 rounded-2xl font-semibold transition-colors whitespace-nowrap " +
            (isActive
              ? "bg-orange-400 text-white shadow-md"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200")
          }
        >
          Tacos
        </NavLink>
        {/* Tortas */}
        <NavLink
          to="/Tortas"
          end
          className={({ isActive }) =>
            "px-4 py-2 rounded-2xl font-semibold transition-colors whitespace-nowrap " +
            (isActive
              ? "bg-orange-400 text-white shadow-md"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200")
          }
        >
          Tortas
        </NavLink>
        {/* Quesadilas */}
        <NavLink
          to="/Quesadillas"
          end
          className={({ isActive }) =>
            "px-4 py-2 rounded-2xl font-semibold transition-colors whitespace-nowrap " +
            (isActive
              ? "bg-orange-400 text-white shadow-md"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200")
          }
        >
          Quesadillas
        </NavLink>
        {/* Refrescos */}
        <NavLink
          to="/Refrescos"
          end
          className={({ isActive }) =>
            "px-4 py-2 rounded-2xl font-semibold transition-colors whitespace-nowrap " +
            (isActive
              ? "bg-orange-400 text-white shadow-md"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200")
          }
        >
          Refrescos
        </NavLink>
      </nav>
    </header>
  );
}
