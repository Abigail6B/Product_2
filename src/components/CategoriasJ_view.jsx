//se importan los componentes que se utilizarán
import { Navbar } from './Navbar'
import { SidebarJ } from './SidebarJ';
import { Footer } from './Footer'
import Categorias from "./Categorias";
import React from 'react'

const CategoriasJ_view = () => {
  return (
    //Para crear la vista, es necesario invocar los componentes dentro de los brackets, en el orden deseado..
    <>
    <Navbar />
    <SidebarJ />
    <Categorias />
    <Footer />
    </>
  )
}

export default CategoriasJ_view;//se exporta para posteriormente usarlo en APP.JSX