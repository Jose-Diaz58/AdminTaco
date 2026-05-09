import React from 'react'
import { NavLink } from 'react-router'


export function SubHeader() {
    const Navegacion = [
        {
            name: "Todos",
            path: "/",
            icon: ""
        },
        {
            name: "Tacos",
            path: "/Tacos",
            icon: "🌮"
        },
        {
            name: "Tortas",
            path: "/Tortas",
            icon: "🥖"
        },
        {
            name: "Quesadillas",
            path: "/Quesadillas",
            icon: "🥟"
        },
        {
            name: "Refrescos",
            path: "/Refrescos",
            icon: "🥤"
        }
    ]
    return (
        <header className='px-2 py-2'>
            <nav className="flex gap-4 px-6 overflow-x-auto no-scrollbar">
            {Navegacion.map((item)=>  
                <NavLink
                key={item.name}
                to={item.path}
                end
                className={({ isActive }) =>
                    "px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap " +
                (isActive
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700 border-gray-200 hover:border-orange-400 hover:bg-gray-100")
                }
                >
                    {item.name}
              </NavLink>
                )}
            </nav>
        </header>
    )
}
