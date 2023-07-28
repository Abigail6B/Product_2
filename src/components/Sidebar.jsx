import React from 'react'
import { Link } from 'react-router-dom'
import user from '../assets/user.png'

export const Sidebar = () => {
  const rosa={
    background:'#FFDDD2'
  }
  const letras={
    color:'#000'
  }
  return (
    <>
        
  <aside className="main-sidebar sidebar-dark-primary elevation-4" style={rosa}>
    <a href="../../index3.html" className="brand-link">
      <span style={letras} className="brand-text font-weight-light">Muebleria DAF</span>
    </a>

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
            <Link to="/Productos" className="nav-link">
              <i style={letras} className="fas fa-list-alt"> </i>
              <p style={letras}>
                Productos
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Productos_gerencia" className="nav-link">
              <i style={letras} className="fas fa-list-alt"> </i>
              <p style={letras}>
                Productos Gerente
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Usuarios" className="nav-link">
              <i style={letras} className="fas fa-users"></i>
              <p style={letras}>
                Usuarios
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/entradas_salidas" className="nav-link">
              <i style={letras} className="fas fa-sign-in-alt"></i>
              <p style={letras}>
                Entradas y Salidas
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/entradas_salidas_gerencia" className="nav-link">
              <i style={letras} className="fas fa-sign-in-alt"></i>
              <p style={letras}>
                Entradas y Salidas Generente
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i style={letras} className="fas fa-book-open"></i>
              <p style={letras}>
                Categorias
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/categoria_gerencia" className="nav-link">
              <i style={letras} className="fas fa-book-open"></i>
              <p style={letras}>
                Categorias Gerente
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Informes" className="nav-link">
              <i style={letras} className="fas fa-chart-bar"></i>
              <p style={letras}>
                Informes
              </p>
            </Link>
          </li>


          
         
          
         
          
    
        </ul>
      </nav>
    </div>
  </aside>
  <aside className="control-sidebar control-sidebar-dark">
  </aside>
    </>
  )
}