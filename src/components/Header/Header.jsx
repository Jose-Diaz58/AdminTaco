import React from "react";
import { NavLink } from "react-router";
import {LogOut} from "lucide-react"
export function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2 text-orange-500 font-bold text-2xl">
          <button onClick={()=>alert("Profe paseme la materia 😭")}>🌮</button><span>Taqueria el amigo Abraham</span>
        </div>
        <NavLink  to={"/"}className="text-2xl text-gray-700 hover:text-orange-500">
          {" "}
          <LogOut/>
        </NavLink>
      </div>
    </header>
  );
}