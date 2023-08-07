import React from 'react'
//se importan los componentes con los que se formará la vista
import { Navbar } from './Navbar'
import { SidebarG } from './SidebarG'
import { Footer } from './Footer'
import {Entrada_salida_geren} from './Entrada_salida_geren'

export const Esgeren =() => {
  return (
    //Se indican que componentes formarán la vista y en que orden.
    <>
      <Navbar />
      <SidebarG />
      < Entrada_salida_geren />
      <Footer />
    </>
  )
}
