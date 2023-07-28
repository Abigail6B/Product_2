
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import Categorias from "./Categorias";
import React from 'react'

const Categorias_view = () => {
  return (
    <>
    <Navbar />
    <Sidebar />
    <Categorias />
    <Footer />
    </>
  )
}

export default Categorias_view;