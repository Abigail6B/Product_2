import React from 'react'
//Se cargan los componentes necesarios para formar la vista.
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import Productos from './Productos'


const Productos_view = () => {
  return (
    //Dentro de los brackets se insertan las partes de la vista
    //(barra superior, menu lateral, contenido y pie de página).
    <>
    <Navbar />
    <Sidebar />
    <Productos/>
    <Footer />
    </>
  )
}
//se exporta el componente para poder utilizarlo en el archivo App.jsx
export default Productos_view;