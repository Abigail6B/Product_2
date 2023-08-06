import React from 'react'
import { Navbar } from './Navbar'
import { SidebarG } from './SidebarG'
import { Footer } from './Footer'
import {Inicio} from './Inicio'

const InicioG_view = () => {
  return (
    <>
        <Navbar />
        <SidebarG/>
        <Inicio/>
        <Footer/>
    </>
  )
}

export default InicioG_view