import React from 'react'
import { MenuCliente } from '../../components'

export function ClienteLayout({children}) {
  return (
    <div>
          <MenuCliente/>
          {children}
        </div>
  )
}
