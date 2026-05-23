import React from 'react'
import { NavLink } from 'react-router'


export function SubHeader() {
    const Navegacion = [
        {
            name: "Todos",
            path: "/Inicio",
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
        <header className='px-2 py-2 shrink-0'>

            <nav className="flex gap-3 md:gap-4 px-2 md:px-6 overflow-x-auto no-scrollbar pb-1">
                {Navegacion.map((item)=>  
                    <NavLink
                        key={item.name}
                        to={item.path}
                        end
                        className={({ isActive }) =>
                            "flex items-center gap-2 px-4 py-2 md:py-2.5 rounded-xl font-semibold transition-all whitespace-nowrap shadow-sm active:scale-95 border-b-2 " +
                            (isActive
                                ? "bg-orange-500 text-white border-orange-600 shadow-orange-500/30"
                                : "bg-white text-gray-600 border-gray-100 hover:border-orange-400 hover:bg-orange-50")
                        }
                    >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.name}</span>
                    </NavLink>
                )}
            </nav>
        </header>
    )
}