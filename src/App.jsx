import React from 'react'
import { Catge_ } from './components/Catge_';
import { Esgeren } from './components/Esgeren';
import { SalidasEnt } from './components/SalidasEnt';
import Categorias_view from './components/Categorias_view';
import Productos_view from './components/Productos_view';
import Usuarios_view from './components/Usuarios_view';
import Informes from './components/Informes_view';
import Prodge_view from './components/Prodge_view';
import Home_view from './components/Home_view';

import { BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/entradas_salidas' element={ <SalidasEnt /> }  />
        <Route path='/categoria_gerencia' element={ <Catge_ /> }  />
        <Route path='/entradas_salidas_gerencia' element={ <Esgeren /> }  />
        <Route path='/Informes' element={<Informes />} />
        <Route exact path='/Categorias' element={<Categorias_view/>}/>
        <Route exact path='/' element={<Home_view/>}/>
        <Route path='/Productos' element={<Productos_view/>}/>
        <Route path='/Productos_Gerencia' element={<Prodge_view/>}/>
        <Route path='/Usuarios' element={<Usuarios_view/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
