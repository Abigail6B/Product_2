import React from 'react'
//importar todos los componentes necesarios para la unión
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import Productos_geren from './Productos_geren'

function Prodge_view() {
    return (
        //invocar los componentes necesarios en el orden que se mostrarán
        <>
            <Navbar />

            <Sidebar />
            <Productos_geren />
            <Footer />
        </>
    )
}

export default Prodge_view //exportar para su uso en el archivo App.jsx