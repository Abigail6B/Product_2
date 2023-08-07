import React from 'react'
import { Navbar } from './Navbar'
import { SidebarO } from './SidebarO'
import { Footer } from './Footer'
import {Inicio} from './Inicio'

const InicioO_view = () => {
  return (
    <>
        <Navbar />
        <SidebarO/>
        <Inicio/>
        <Footer/>
    </>
  )
}

export default InicioO_view