import React from 'react';
import {Routes,Route, Navigate} from "react-router";
import {Home, GestionProductos, GestionMesas, CierreCaja} from "../pages"
import {ClienteLayout, AdminLayout} from "../layouts";

export function Rutas() {
  const LoadedLayout=(Layout, Page)=> {
    return(
      <Layout>
        <Page/>
      </Layout>
    )
  }
  return (
    <Routes>
      <Route path= '/' element={LoadedLayout(ClienteLayout,Home)}/>
      <Route path= '/Manager/Productos' element={LoadedLayout(AdminLayout,GestionProductos)}/>
      <Route path='/Manager/Mesas' element={LoadedLayout(AdminLayout,GestionMesas)}/>
      <Route path='/Manager/Caja' element={LoadedLayout(AdminLayout,CierreCaja)}/>
      <Route path='*' element={<Navigate to="/" />}/>
    </Routes>
  )
}
export default Rutas