import React from "react";
import { NavLink } from "react-router";
import { LogOut, Settings } from "lucide-react"
import Swal from "sweetalert2";
export function Header() {
  const isterek=()=>{
 Swal.fire({
  title: "BIENVENIDOS A LA TAQUERIA EL AMIGO ABRAHAM >:D",
  width: 600,
  padding: "3em",
  color: "#716add",
  background: "#fff",
  backdrop: `
    rgba(0,0,123,0.4)
    url("https://media1.tenor.com/m/NVrx4YqUGDIAAAAC/cat-nyan-cat.gif")
    left top / 300px 300px
    no-repeat
  `
});
  }
  return (
    <header className="bg-orange-600 border-b-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2 text-white font-bold text-2xl">
          <button onClick={isterek}>🌮</button><span>Taqueria el amigo Abraham</span>
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
