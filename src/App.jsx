import React from 'react'
import {Catge_} from './components/Catge_'
import { Esgeren } from './components/Esgeren'
import { SalidasEnt } from './components/SalidasEnt'

import { BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/entradas_salidas' element={ <SalidasEnt /> }  />
        <Route path='/categoria_gerencia' element={ <Catge_ /> }  />
        <Route path='/entradas_salidas_gerencia' element={ <Esgeren /> }  />
      </Routes>
    </BrowserRouter>
  )
}

export default App
