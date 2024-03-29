import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
//administrador
import Categorias_view from './components/Categorias_view';
import Productos_view from './components/Productos_view';
import Usuarios_view from './components/Usuarios_view';
import Informes from './components/Informes_view';
import { SalidasEnt } from './components/SalidasEnt'
import { Productos_update_view } from './components/Productos_update_view';
import { Usuarios_update_view } from './components/Usuarios_update_view';
import Categorias_update_view from './components/Categorias_update_view';
import { Entradas_Salidas_update_view } from './components/Entradas_Salidas_update_view';

//home e inicio
import Home_view from './components/Home_view';
import Inicio_view from './components/Inicio_view';
//Operador de almacen
import CategoriasO_view from './components/CategoriasO_view'; 
import ProductosO_view from './components/ProductosO_view';
import InicioO_view from './components/InicioO_view';
//Gerente
import Prodge_view from './components/Prodge_view';
import {Catge_} from './components/Catge_'
import { Esgeren } from './components/Esgeren'
import InicioG_view from './components/InicioG_view';
import { InformesG_view } from './components/InformesG_view';

//Jefe
import InicioJ_view from './components/InicioJ_view';
import ProductosJ_view from './components/ProductosJ_view';
import CategoriasJ_view from './components/CategoriasJ_view';
import { SalidasEntJ } from './components/SalidasEntJ';

function App() {

   const id_categoria = 0;
  return (
    <BrowserRouter>
      <Routes>
        {/* rutas principales */}
        <Route exact path='/' element={<Home_view/>}/>
        <Route path='/Home' element={<Inicio_view/>} />

        {/* rutas de administrador */}
        <Route path='/Usuarios' element={<Usuarios_view/>}/>
        <Route path='/entradas_salidas' element={ <SalidasEnt /> }  />
        <Route path='/Productos' element={<Productos_view/>}/>
        <Route path='/Informes' element={<Informes />} />
        <Route exact path='/Categorias' element={<Categorias_view/>}/>
        <Route path={`/producto_actualizar/:id`} element={ <Productos_update_view/>}  />
        <Route path={`/usuario_actualizar/:id`} element={ <Usuarios_update_view /> }  />
        <Route path={`/categoria_actualizar/:id`} element={ <Categorias_update_view /> }  />
        <Route path={`/entsal_actualizar/:id`} element={ <Entradas_Salidas_update_view /> }  />

        {/* rutas de gerente */}
        <Route path='/HomeG' element={ <InicioG_view /> }  />
        <Route path='/categoria_gerencia' element={ <Catge_ /> }  />
        <Route path='/entradas_salidas_gerencia' element={ <Esgeren /> }  />
        <Route path='/Productos_Gerencia' element={<Prodge_view/>}/>
        <Route path='/Informes_gerencia' element={<InformesG_view/>}/>

        
        {/* rutas de operador */}
        <Route path='/HomeO' element={<InicioO_view/>} />
        <Route path='/ProductosO' element={<ProductosO_view/>} />
        <Route path='/CategoriasO' element={<CategoriasO_view/>} />

{       /* rutas del jede */}
        <Route path='/HomeJ' element={<InicioJ_view/>} />
        <Route path='/ProductosJ' element={<ProductosJ_view/>} />
        <Route path='/CategoriasJ' element={<CategoriasJ_view/>} />
        <Route path='/entradas_salidasJ' element={<SalidasEntJ/>} />
      </Routes>
    </BrowserRouter>
)
}

export default App
