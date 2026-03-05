import React from 'react'

export function MenuAdmin() {
  return (
    <div className='bg-orange-600 text-white'>
      <div className='flex items-center gap-3 px-8 pt-5 pb-3'>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-bold leading-none mb-1'>Panel de Administracion</h1>
          <p className='text-sm text-orange-100 font-light'>Taqueria Abraham</p>
        </div>
      </div>

      <nav className='flex flex-row gap-8 px-8 border-t border-orange-500'>
        <button className='py-3 font-semibold cursor-pointer text-white'>
          Gestión de Productos
        </button>
        <button className='py-3 font-medium cursor-pointer text-orange-100 hover:text-white transition-all'>
          Gestión de Mesas
        </button>
        <button className='py-3 font-medium cursor-pointer text-orange-100 hover:text-white transition-all'>
          $Cierre de Caja
        </button>
      </nav>
    </div>
  )
}
