import {Menu, UserCircle, LogOut} from "lucide-react"
import { NavLink } from 'react-router'

export function HeaderAdmin({toggleSidebar}) {
  return (
    <div className="flex items-center justify-between px-4 lg:px-8 pt-4 pb-3">
        <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="p-2 text-white lg:hidden hover:bg-orange-700 rounded-lg transition-colors">
            <Menu size={24}/>
        </button>

        <span className="text-3xl md:text-4xl">🌮</span>

        <div className="flex flex-col">
            <h1 className="text-2xl font-bold leading-none mb-1">Panel de Administracion</h1>
            <p className="text-sm text-orange-100 font-light">Taqueria Abraham</p>
        </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
            <div className="text-right flex flex-col">
                <span className="text-sm font-bold leading-tight">Administrador</span>
                <span className="text-sm text-orange-100 leading-tight">Admin</span>
            </div>
            <UserCircle size={38} className="text-white opacity-90"/>
            <NavLink  to={"/"}className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 ml-2 rounded-lg font-medium border border-red-500 transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:-translate-y-1 hover:border-red-600 active:scale-95">
          <LogOut/>
        </NavLink>
        </div>
    </div>
  )
}
