import React from 'react'
//importar todos los componentes necesarios para la unión
import { Navbar } from './Navbar'
import { SidebarG } from './SidebarG'
import { Footer } from './Footer'
import Productos_geren from './Productos_geren'

function Prodge_view() {
    return (
        //invocar los componentes necesarios en el orden que se mostrarán
        <>
            <Navbar />

            <SidebarG />
            <Productos_geren />
            <Footer />
        </>
    )
}

export default Prodge_view //exportar para su uso en el archivo App.jsx