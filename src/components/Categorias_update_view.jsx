import React from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import { Categorias_update } from './Categorias_update'

const Categorias_update_view = () => {
  return (
    <>
        <Navbar />
        <Sidebar />
        <Categorias_update/>
        <Footer />
    </>
  )
}

export default Categorias_update_view