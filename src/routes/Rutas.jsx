import React from 'react';
import {Routes,Route,Navigate} from "react-router";
import {Home, Manager, Tacos,Tortas,Refrescos, Quesadillas,} from "../pages";
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
      <Route path= '/' element={LoadedLayout(ClienteLayout,Home)}/>
      <Route path='/Tacos' element={LoadedLayout(ClienteLayout,Tacos)}/>
      <Route path="/Tortas" element={LoadedLayout(ClienteLayout,Tortas)}/>
      <Route path="/Refrescos" element={LoadedLayout(ClienteLayout,Refrescos)}/>
      <Route path='/Quesadillas' element={LoadedLayout(ClienteLayout,Quesadillas)}/>
      <Route path= '/Manager' element={LoadedLayout(AdminLayout,Manager)}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
export default Rutas