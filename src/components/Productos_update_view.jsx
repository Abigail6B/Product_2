import React from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import { Productos_update } from './Productos_update'

export const Productos_update_view = () => {
  return (
    <>
        <Navbar />
        <Sidebar />
        <Productos_update/>
        <Footer />
    </>
  )
}
