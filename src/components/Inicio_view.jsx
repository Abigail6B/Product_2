import React from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import {Inicio} from './Inicio'

const Inicio_view = () => {
  return (
    <>
        <Navbar />
        <Sidebar/>
        <Inicio/>
        <Footer/>
    </>
  )
}

export default Inicio_view