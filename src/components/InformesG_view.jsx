import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import Informes from './Informes'
import { SidebarG } from './SidebarG'

export const InformesG_view = () => {
  return (
    <>
        <Navbar />
        <SidebarG/>
        <Informes/>
        <Footer/>
    </>
  )
}
