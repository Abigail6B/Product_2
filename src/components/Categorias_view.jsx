//se importan los componentes que se utilizarán
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import Categorias from "./Categorias";
import React from 'react'

const Categorias_view = () => {
  return (
    //Para crear la vista, es necesario invocar los componentes dentro de los brackets, en el orden deseado..
    <>
    <Navbar />
    <Sidebar />
    <Categorias />
    <Footer />
    </>
  )
}

export default Categorias_view;//se exporta para posteriormente usarlo en APP.JSX