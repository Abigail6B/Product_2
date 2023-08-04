import React, { useState } from 'react'
import {Catge_} from './components/Catge_'
import { Esgeren } from './components/Esgeren'
import { SalidasEnt } from './components/SalidasEnt'
import Categorias_view from './components/Categorias_view';
import Productos_view from './components/Productos_view';
import Usuarios_view from './components/Usuarios_view';
import Informes from './components/Informes_view';
import Prodge_view from './components/Prodge_view';
import Home_view from './components/Home_view';
import Inicio_view from './components/Inicio_view';
import Categorias_update_view from './components/Categorias_update_view';

import { BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {

  const [data, setData] = useState([])
        fetch("http://localhost/prueba_1/index.php/Api/CATEGORIA")
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.log('error', error));
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/entradas_salidas' element={ <SalidasEnt /> }  />
        <Route path='/categoria_gerencia' element={ <Catge_ /> }  />
        {data.map((cate)=>(
        <Route key={cate.id_categoria} path={`/categoria_actualizar/${cate.id_categoria}`} element={ <Categorias_update_view /> }  />
        ))}
        <Route path='/entradas_salidas_gerencia' element={ <Esgeren /> }  />
        <Route path='/Informes' element={<Informes />} />
        <Route exact path='/Categorias' element={<Categorias_view/>}/>
        <Route exact path='/' element={<Home_view/>}/>
        <Route path='/Productos' element={<Productos_view/>}/>
        <Route path='/Productos_Gerencia' element={<Prodge_view/>}/>
        <Route path='/Usuarios' element={<Usuarios_view/>}/>
        <Route path='/Home' element={<Inicio_view/>} />
      </Routes>
    </BrowserRouter>
)
}

export default App
