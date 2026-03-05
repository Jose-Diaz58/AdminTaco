import React from 'react';
import {Routes,Route} from "react-router";
import {Home, Manager} from "../pages";
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
      <Route path= '/Manager' element={LoadedLayout(AdminLayout,Manager)}/>
    </Routes>
  )
}
export default Rutas