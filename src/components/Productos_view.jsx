import React from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import Productos from './Productos'


const Productos_view = () => {
  return (
    <>
    <Navbar />
    <Sidebar />
    <Productos/>
    <Footer />
    </>
  )
}

export default Productos_view;