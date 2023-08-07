import React from 'react'
import { Link } from 'react-router-dom' //se importa esta libreria con la finalidad de poder hacer uso de links 
                                        //y navegar entre vistas
import user from '../assets/user.png'   // se importa la imagen que se utilizará para el ususario

export const SidebarJ = () => {
  //se crean estilos para asignar color a las fuentes y el fondo del sidebar
  const rosa={
    background:'#ffde59'
  }
  const letras={
    color:'#000'
  }
  return (
    <>
        
  <aside className="main-sidebar sidebar-dark-primary" style={rosa}>
    <Link to="/Home" className="brand-link">
        <span style={letras} className="brand-text font-weight-light">Muebleria DAF</span>
    </Link>

    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
        </div>
        <div className="Black">
          <a href="#" className="d-block" style={letras}><img src={user} alt="" width="60" height="60"/>Paulo Daniel Vazquez Mora</a>
        </div>
      </div>

      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <nav className="mt-2" >
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item">
            <Link to="/ProductosJ" className="nav-link">
              <i style={letras} className="fas fa-list-alt"> </i>
              <p style={letras}>
                Productos
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/entradas_salidasJ" className="nav-link">
              <i style={letras} className="fas fa-sign-in-alt"></i>
              <p style={letras}>
                Entradas y Salidas
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/CategoriasJ" className="nav-link">
              <i style={letras} className="fas fa-book-open"></i>
              <p style={letras}>
                Categorias
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
    </>
  )
}