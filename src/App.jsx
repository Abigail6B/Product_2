import React from 'react'
import { Catge_ } from './components/Catge_';
import { Esgeren } from './components/Esgeren';
import { SalidasEnt } from './components/SalidasEnt';
import Categorias_view from './components/Categorias_view';
import Productos_view from './components/Productos_view';
import Usuarios_view from './components/Usuarios_view';
<<<<<<< HEAD
import Login from './components/Login_view';
import Home from './components/Home_view';
import Informes from './components/Informes_view';
import Prodge from './components/Prodge_view'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
=======
import Informes from './components/Informes_view';
import Prodge_view from './components/Prodge_view';
import Home_view from './components/Home_view';

import { BrowserRouter, Route, Routes} from 'react-router-dom'

>>>>>>> Abigail

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route exact path='/' element={<Login />} />
        <Route path='/Productos_gerencia' element={<Prodge />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Informes' element={<Informes />} />
        <Route path='/Entradas_salidas' element={<SalidasEnt />} />
        <Route path='/Categoria_gerencia' element={<Catge_ />} />
        <Route path='/Entradas_salidas_gerencia' element={<Esgeren />} />
        <Route path='/Categorias' element={<Categorias_view />} />
        <Route path='/Productos' element={<Productos_view />} />
        <Route path='/Usuarios' element={<Usuarios_view />} />
=======
        <Route path='/entradas_salidas' element={ <SalidasEnt /> }  />
        <Route path='/categoria_gerencia' element={ <Catge_ /> }  />
        <Route path='/entradas_salidas_gerencia' element={ <Esgeren /> }  />
        <Route path='/Informes' element={<Informes />} />
        <Route exact path='/Categorias' element={<Categorias_view/>}/>
        <Route exact path='/' element={<Home_view/>}/>
        <Route path='/Productos' element={<Productos_view/>}/>
        <Route path='/Productos_Gerencia' element={<Prodge_view/>}/>
        <Route path='/Usuarios' element={<Usuarios_view/>}/>
>>>>>>> Abigail
      </Routes>
    </BrowserRouter>
  )
}

export default App
