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
    </BrowserRouter>
  )
}

export default App
