import React from 'react';
import { Routes, Route, Navigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import { Home, Tacos, Tortas, Refrescos, Quesadillas, GestionProductos, GestionMesas, CierreCaja, Login } from "../pages";
import { ClienteLayout, AdminLayout } from "../layouts";
import { CarritoProvider } from "../components/Carrito/CarritoContext";
import { MesasProvider } from "../components/Mesas/MesasContext";


const RutaProtegida = ({ children, rolRequerido }) => {
  const token = localStorage.getItem('adminToken');

  if (!token) {
    return <Navigate to="/" replace />;
  }

  try {
    const datosDecodificados = jwtDecode(token);
    const rolUsuario = datosDecodificados.usuario?.rol;

    if (rolRequerido && rolUsuario !== rolRequerido) {
      return <Navigate to="/Inicio" replace />;
    }
  } catch (error) {
    localStorage.removeItem('adminToken');
    return <Navigate to="/" replace />;
  }

  return children;
};

export function Rutas() {
  const LoadedLayout = (Layout, Pages) => {
    return (
      <Layout>
        <Pages />
      </Layout>
    );
  };

  return (
    <MesasProvider>
      <CarritoProvider>
        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='/Manager/Productos' element={<RutaProtegida rolRequerido="ADMIN">{LoadedLayout(AdminLayout, GestionProductos)}</RutaProtegida>}/>
          <Route path='/Manager/Mesas' element={<RutaProtegida rolRequerido="ADMIN">{LoadedLayout(AdminLayout, GestionMesas)}</RutaProtegida>}/>
          <Route path='/Manager/Caja' element={<RutaProtegida rolRequerido="ADMIN">{LoadedLayout(AdminLayout, CierreCaja)}</RutaProtegida>}/>

          <Route path='/Inicio' element={<RutaProtegida>{LoadedLayout(ClienteLayout, Home)}</RutaProtegida>}/>
          <Route path='/Tacos' element={<RutaProtegida>{LoadedLayout(ClienteLayout, Tacos)}</RutaProtegida>}/>
          <Route path="/Tortas" element={<RutaProtegida>{LoadedLayout(ClienteLayout, Tortas)}</RutaProtegida>}/>
          <Route path="/Refrescos" element={<RutaProtegida>{LoadedLayout(ClienteLayout, Refrescos)}</RutaProtegida>}/>
          <Route path='/Quesadillas' element={<RutaProtegida>{LoadedLayout(ClienteLayout, Quesadillas)}</RutaProtegida>}/>

          <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
      </CarritoProvider>
    </MesasProvider>
  );
}

export default Rutas;