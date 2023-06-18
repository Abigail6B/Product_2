import React from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import {Entrada_salida_geren} from './Entrada_salida_geren'

export const Esgeren =() => {
  return (
    <>
      <Navbar />
      <Sidebar />
      < Entrada_salida_geren />
      <Footer />
    </>
  )
}
