import React from 'react'
//importar los componentes necesarios para la creación de una vista completa
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import Usuarios from './Usuarios'

const Usuarios_view = () => {
  return (
    //se indica que componentes se deben mostrar en la vista
    <>
    <Navbar />
    <Sidebar />
    <Usuarios/>
    <Footer />
    </>
  )
}

export default Usuarios_view; // se exporta para poder utilizarlo en el archivo App.jsx