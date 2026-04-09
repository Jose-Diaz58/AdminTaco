import { NavLink } from "react-router";
import { Package, Utensils, DollarSign, X } from "lucide-react";

export function MenuAdmin({ isOpen, toggleSidebar }) {
  const menuOptions = [
    { name: 'Gestión de Productos', path: '/Manager/Productos', icon: <Package size={20} /> },
    { name: 'Gestión de Mesas', path: '/Manager/Mesas', icon: <Utensils size={20} /> },
    { name: 'Cierre de Caja', path: '/Manager/Caja', icon: <DollarSign size={20} /> }
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={toggleSidebar}/>
      )}

      <nav className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white text-slate-800 shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:static lg:translate-x-0 lg:w-auto lg:bg-transparent lg:text-white lg:shadow-none lg:flex lg:flex-row lg:gap-8 lg:px-8 lg:border-t lg:border-orange-50`}>
        
        <div className="flex items-center justify-between p-4 bg-orange-600 text-white lg:hidden">
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg">Menú</span>
          </div>
          <button onClick={toggleSidebar} className="p-1 hover:bg-orange-700 rounded-md">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-2 lg:p-0 lg:flex-row lg:gap-8 overflow-y-auto h-[calc(100%-60px)] lg:h-auto">
          {menuOptions.map((item) => (
            <NavLink key={item.name} to={item.path} onClick={() => {if (window.innerWidth < 1024) toggleSidebar();}}
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium lg:px-0 lg:py-3 lg:rounded-none lg:bg-transparent lg:border-b-2 ${isActive ? 'bg-orange-100 text-orange-600 lg:border-white lg:text-white lg:font-semibold' : 'text-slate-600 hover:bg-slate-100 lg:border-transparent lg:text-orange-100 lg:hover:text-white lg:hover:bg-transparent'}`}>
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}