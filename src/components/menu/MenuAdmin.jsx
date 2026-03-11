import { NavLink } from "react-router"
import { Package, Utensils, DollarSign} from "lucide-react"

export function MenuAdmin() {
  const menuOptions = [
    { name: 'Gestión de Productos', path: '/Manager/Productos', icon: <Package size={20} /> },
    { name: 'Gestión de Mesas', path: '/Manager/Mesas', icon: <Utensils size={20} /> },
    { name: 'Cierre de Caja', path: '/Manager/Caja', icon: <DollarSign size={20} /> }
  ]

  return (
    <div className='bg-orange-600 text-white'>
      <div className='flex items-center gap-3 px-8 pt-5 pb-3'>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-bold leading-none mb-1'>Panel de Administración</h1>
          <p className='text-sm text-orange-100 font-light'>Taquería Abraham</p>
        </div>
      </div>

      <nav className='flex flex-row gap-8 px-8 border-t border-orange-500'>
        {
          menuOptions.map((item) => (
            <NavLink key={item.name} to={item.path}
            className={({ isActive }) => `py-3 transition-all flex items-center gap-2 ${isActive ? 'font-semibold text-white border-b-2 border-white' : 'font-medium text-orange-100 hover:text-white'}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))
        }
      </nav>
    </div>
  )
}