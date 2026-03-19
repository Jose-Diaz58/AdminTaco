import {Menu} from 'lucide-react'
 
export function BotonHamburguesa({toggleSidebar}) {
  return (
    <button onClick={toggleSidebar} className='p-2 text-white lg:hidden hover:bg-orange-700 rounded-lg transition-colors'>
        <Menu size={24} />
    </button>
  )
}
