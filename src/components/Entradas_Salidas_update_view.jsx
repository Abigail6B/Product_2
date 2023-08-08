import React from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import { Entradas_Salidas_update } from './Entradas_Salidas_update'

export const Entradas_Salidas_update_view = () => {
  return (
    <>
        <Navbar />
        <Sidebar />
        <Entradas_Salidas_update/>
        <Footer />
    </>
  )
}
