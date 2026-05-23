import { NavLink } from "react-router";
import { Package, Utensils, DollarSign, X, LogOut, UserCircle } from "lucide-react"; 

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
        fixed inset-y-0 left-0 z-50 w-72 bg-white text-slate-800 shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:static lg:translate-x-0 lg:w-auto lg:bg-transparent lg:text-white lg:shadow-none lg:flex lg:flex-row lg:gap-8 lg:px-8`}>
        
        <div className="flex items-center justify-between p-4 bg-orange-600 text-white lg:hidden shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg">Menú Admin</span>
          </div>
          <button onClick={toggleSidebar} className="p-1 hover:bg-orange-700 rounded-md">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 flex flex-col p-4 gap-2 lg:p-0 lg:flex-row lg:gap-8 overflow-y-auto">
          {menuOptions.map((item) => (
            <NavLink key={item.name} to={item.path} onClick={() => {if (window.innerWidth < 1024) toggleSidebar();}}
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium lg:px-0 lg:py-3 lg:rounded-none lg:bg-transparent lg:border-b-2 ${isActive ? 'bg-orange-100 text-orange-600 lg:border-white lg:text-white lg:font-semibold' : 'text-slate-600 hover:bg-slate-100 lg:border-transparent lg:text-orange-100 lg:hover:text-white lg:hover:bg-transparent'}`}>
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50 lg:hidden mt-auto shrink-0">
          <div className="flex items-center gap-3 mb-4">
            <UserCircle size={32} className="text-gray-400" />
            <div>
              <p className="text-sm font-bold text-slate-800 leading-tight">Administrador</p>
              <p className="text-xs text-slate-500 leading-tight">Admin</p>
            </div>
          </div>
          <NavLink 
            to={"/Inicio"} 
            className="flex items-center justify-center gap-2 bg-red-100 text-red-600 hover:bg-red-200 px-4 py-2.5 rounded-lg font-medium transition-colors w-full"
          >
            <LogOut size={18} />
            <span>Cerrar Sesión</span>
          </NavLink>
        </div>

      </nav>
    </>
  );
}