import React from "react";
import { NavLink } from "react-router";
export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b shadow-sm">
      <div className="flex items-center gap-2 text-orange-500 font-bold text-xl">
        🌮<span>Taqueria el amigo Abraham</span>
      </div>
      <button className="text-2xl text-gray-700 hover:text-orange-500">
        {" "}
        ☰
      </button>
    </header>
  );
}
