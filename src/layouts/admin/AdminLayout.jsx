import React from 'react'

export function AdminLayout({children}) {
  return (
    <div>
      <MenuAdmin/>
      <main>
        {children}
        </main>
        
    </div>
  )
}
