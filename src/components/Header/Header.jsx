import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { LogOut, Settings } from "lucide-react";
import { jwtDecode } from "jwt-decode";

export function Header() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    
    if (token) {
      try {
        const datosDecodificados = jwtDecode(token);

        if (datosDecodificados.usuario?.rol === 'ADMIN') {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Error al decodificar el token", error);
      }
    }
  }, []);

  const handleCerrarSesion = () => {
    localStorage.removeItem("adminToken");
  };

  return (
    <header className="bg-orange-600 border-b-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2 text-white font-bold text-2xl">
          <button onClick={() => alert("Profe paseme la materia 😭")}>🌮</button>
          <span>Taqueria el amigo Abraham</span>
        </div>
        
        <div className="flex items-center gap-3">

          {isAdmin && (
            <NavLink to={"/Manager/Productos"} className="flex items-center gap-2 bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
              <Settings size={18}/>Admin
            </NavLink>
          )}

          <NavLink to={"/"} onClick={handleCerrarSesion} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Salir
            <LogOut size={18}/>
          </NavLink>
    
        </div>
      </div>
    </header>
  );
}