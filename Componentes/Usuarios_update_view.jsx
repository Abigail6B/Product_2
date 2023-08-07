import React from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import { Usuarios_update } from './Usuarios_update'

export const Usuarios_update_view = () => {
  return (
    <>
        <Navbar />
        <Sidebar />
        <Usuarios_update/>
        <Footer />
    </>
  )
}
