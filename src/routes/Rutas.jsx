import React from 'react';
import {Routes,Route} from "react-router";
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
      <Route path= '' element={LoadedLayout(ClienteLayout,Home)}/>
      <Route path= '/Manager' element={LoadedLayout(AdminLayout,GestionProductos)}/>
      <Route path='/Manager/mesas' element={LoadedLayout(AdminLayout,GestionMesas)}/>
      <Route path='/Manager/caja' element={LoadedLayout(AdminLayout,CierreCaja)}/>
    </Routes>
  )
}
export default Rutas