import React from 'react'
import { MenuAdmin } from '../../components'

export function AdminLayout({children}) {
  return (
    <div>
      <MenuAdmin/>
      {children}
    </div>
  )
}
