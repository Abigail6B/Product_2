import React from 'react'
import { Navbar } from './Navbar'
import { SidebarJ } from './SidebarJ'
import { Footer } from './Footer'
import {Inicio} from './Inicio'

const InicioJ_view = () => {
  return (
    <>
        <Navbar />
        <SidebarJ/>
        <Inicio/>
        <Footer/>
    </>
  )
}

export default InicioJ_view