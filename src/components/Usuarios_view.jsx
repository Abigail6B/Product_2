import React from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import Usuarios from './Usuarios'

const Usuarios_view = () => {
  return (
    <>
    <Navbar />
    <Sidebar />
    <Usuarios/>
    <Footer />
    </>
  )
}

export default Usuarios_view;