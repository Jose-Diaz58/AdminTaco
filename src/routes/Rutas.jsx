import React from 'react';
import {Routes,Route,Navigate} from "react-router";
import {Home, Tacos,Tortas,Refrescos, Quesadillas,GestionProductos, GestionMesas, CierreCaja} from "../pages";
import {ClienteLayout, AdminLayout} from "../layouts";
import {CarritoProvider}from "../components/Carrito/CarritoContext"

export function Rutas() {
  const LoadedLayout=(Layout, Pages)=> {
    return(
      <Layout>
        <Pages/>
      </Layout>
    )
  }
  return (
    <CarritoProvider>
    <Routes>
      <Route path= '/' element={LoadedLayout(ClienteLayout,Home)}/>
      <Route path= '/Manager/Productos' element={LoadedLayout(AdminLayout,GestionProductos)}/>
      <Route path='/Manager/Mesas' element={LoadedLayout(AdminLayout,GestionMesas)}/>
      <Route path='/Manager/Caja' element={LoadedLayout(AdminLayout,CierreCaja)}/>
      <Route path='*' element={<Navigate to="/" />}/>
      <Route path='/Tacos' element={LoadedLayout(ClienteLayout,Tacos)}/>
      <Route path="/Tortas" element={LoadedLayout(ClienteLayout,Tortas)}/>
      <Route path="/Refrescos" element={LoadedLayout(ClienteLayout,Refrescos)}/>
      <Route path='/Quesadillas' element={LoadedLayout(ClienteLayout,Quesadillas)}/>
    </Routes>
    </CarritoProvider>
  )
}
export default Rutas