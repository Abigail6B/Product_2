import React from 'react'
//importar los componentes necesarios para crear una vista completa
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import {Categorias_geren} from './Categorias_geren'

export const Catge_ =() => {
  return (
    //Se especifican los componentes y el orden en que se mostrarán en la vista.
    <>
      <Navbar />
      <Sidebar />
      <Categorias_geren/>
      <Footer />
    </>
  )
}
