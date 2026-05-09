import React from "react";
import { NavLink } from "react-router";
import { LogOut, Settings } from "lucide-react"
export function Header() {
  return (
    <header className="bg-orange-600 border-b-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2 text-white font-bold text-2xl">
          <button onClick={() => alert("Profe paseme la materia 😭")}>🌮</button><span>Taqueria el amigo Abraham</span>
        </div>
        <div className="flex items-center gap-3">
          <NavLink to={"/Manager/Productos"}
            className=
            "flex items-center gap-2 bg bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          ><Settings size={18}/>Admin</NavLink>
          <NavLink to={"/"} className="flex items-center gap-2 bg-red-600
           hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
            Salir
            <LogOut size={18}/>
          </NavLink>
        </div>

      </div>
    </header>
  );
}
