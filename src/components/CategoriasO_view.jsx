//se importan los componentes que se utilizarán
import { Navbar } from './Navbar'
import { SidebarO } from './SidebarO';
import { Footer } from './Footer'
import Categorias from "./Categorias";
import React from 'react'

const CategoriasO_view = () => {
  return (
    //Para crear la vista, es necesario invocar los componentes dentro de los brackets, en el orden deseado..
    <>
    <Navbar />
    <SidebarO />
    <Categorias />
    <Footer />
    </>
  )
}

export default CategoriasO_view;//se exporta para posteriormente usarlo en APP.JSX