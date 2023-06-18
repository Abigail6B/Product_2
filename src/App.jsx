<<<<<<< HEAD
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
=======
import React from 'react';
import Categorias_view from '../Componentes/Categorias_view';
import Productos_view from '../Componentes/Productos_view';
import Usuarios_view from '../Componentes/Usuarios_view';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Categorias_view/>}/>
        <Route path='/Productos' element={<Productos_view/>}/>
        <Route path='/Usuarios' element={<Usuarios_view/>}/>
    </Routes>
>>>>>>> Fatima
    </BrowserRouter>
  )
}

export default App
