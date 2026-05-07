import React from 'react'
import { NavLink } from 'react-router'


export function SubHeader() {
    return (
        <header className='px-2 py-2'>
            <nav className="flex gap-4 px-6 overflow-x-auto no-scrollbar">
                <NavLink
                    to="/Inicio"
                    end
                    className={({ isActive }) =>
                        "px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap " +
                        (isActive
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-white text-gray-700 border-gray-200 hover:border-orange-400 hover:bg-gray-100")
                    }
                >
                    Todos
                </NavLink>
                {/* Tacos */}
                <NavLink
                    to="/Tacos"
                    end
                    className={({ isActive }) =>
                        "px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap " +
                        (isActive
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-white text-gray-700 border-gray-200 hover:border-orange-400 hover:bg-gray-100")
                    }
                >
                    Tacos
                </NavLink>
                {/* Tortas */}
                <NavLink
                    to="/Tortas"
                    end
                    className={({ isActive }) =>
                        "px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap " +
                        (isActive
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-white text-gray-700 border-gray-200 hover:border-orange-400 hover:bg-gray-100")
                    }
                >
                    Tortas
                </NavLink>
                {/* Quesadilas */}
                <NavLink
                    to="/Quesadillas"
                    end
                    className={({ isActive }) =>
                        "px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap " +
                        (isActive
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-white text-gray-700 border-gray-200 hover:border-orange-400 hover:bg-gray-100")
                    }
                >
                    Quesadillas
                </NavLink>
                {/* Refrescos */}
                <NavLink
                    to="/Refrescos"
                    end
                    className={({ isActive }) =>
                        "px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap " +
                        (isActive
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-white text-gray-700 border-gray-200 hover:border-orange-400 hover:bg-gray-100")
                    }
                >
                    Refrescos
                </NavLink>
            </nav>
        </header>
    )
}
