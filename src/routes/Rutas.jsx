import React from 'react';
import {Routes,Route} from "react-router";
import {Home, Manager, Tacos,Tortas,Refrescos,Todos} from "../pages";
import {ClienteLayout, AdminLayout} from "../layouts";

export function Rutas() {
  const LoadedLayout=(Layout, Pages)=> {
    return(
      <Layout>
        <Pages/>
      </Layout>
    )
  }
  return (
    <Routes>
      <Route path= '' element={LoadedLayout(ClienteLayout,Home)}/>
      <Route path='/Todos' element={LoadedLayout(ClienteLayout,Todos)}/>
      <Route path='/Tacos' element={LoadedLayout(ClienteLayout,Tacos)}/>
      <Route path="/Tortas" element={LoadedLayout(ClienteLayout,Tortas)}/>
      <Route path="/Refrescos" element={LoadedLayout(ClienteLayout,Refrescos)}/>
      <Route path= '/Manager' element={LoadedLayout(AdminLayout,Manager)}/>
    </Routes>
  )
}
export default Rutas