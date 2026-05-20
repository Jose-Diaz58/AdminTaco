import React from 'react';
import {Routes,Route,Navigate} from "react-router";
import {Home,Tacos,Tortas,Refrescos, Quesadillas,GestionProductos, GestionMesas, CierreCaja, Login} from "../pages";
import {ClienteLayout, AdminLayout} from "../layouts";
import {CarritoProvider}from "../components/Carrito/CarritoContext"

export function Rutas() {
  const LoadedLayout = (Layout, Pages) => {
    return (
      <Layout>
        <Pages />
      </Layout>
    );
  };

  return (
    <CarritoProvider>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path= '/Manager/Productos' element={LoadedLayout(AdminLayout,GestionProductos)}/>
      <Route path='/Manager/Mesas' element={LoadedLayout(AdminLayout,GestionMesas)}/>
      <Route path='/Manager/Caja' element={LoadedLayout(AdminLayout,CierreCaja)}/>
      
      <Route path= '/Inicio' element={LoadedLayout(ClienteLayout,Home)}/>
      <Route path='/Tacos' element={LoadedLayout(ClienteLayout,Tacos)}/>
      <Route path="/Tortas" element={LoadedLayout(ClienteLayout,Tortas)}/>
      <Route path="/Refrescos" element={LoadedLayout(ClienteLayout,Refrescos)}/>
      <Route path='/Quesadillas' element={LoadedLayout(ClienteLayout,Quesadillas)}/>
      <Route path='*' element={<Navigate to="/" />}/>
    </Routes>
    </CarritoProvider>
  );
}

export default Rutas;