import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
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
         <span className="brand-text font-weight-light" style={letras}>Muebleria DAF</span>
      </a>
  
    
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            
          </div>
          <div className="info">
          
            <a href="#" className="d-block">
            <i className="fa-solid fa-user-large"></i>
              <p style={letras}>Paulo Daniel Vazquez Mora</p>
              </a>
          </div>
        </div>
  
  
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>
  
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            
            <li className="nav-item">
              <Link to="/Productos" className="nav-link">
              <i className="fab fa-elementor" style={letras}></i>
                <p style={letras}>
                  Productos
                </p>
              </Link>
              
            </li>
            <li className="nav-item">
              <Link to="/Usuarios" className="nav-link">
              <i className="fas fa-users" style={letras}> </i> 
                <p style={letras}>
                    Usuarios
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
              <i className="fas fa-sign-in-alt" style={letras}></i>
                <p style={letras}>
                  Entradas y Salidas
                </p>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
              <i className="fas fa-book-open" style={letras}></i>
                <p style={letras}>
                  Categorias
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
              <i className="fas fa-chart-bar" style={letras}></i>
                <p style={letras}>
                  Informes
                </p>
              </a>
            </li>
            
          </ul>
        </nav>
      </div>
        </aside>
      </>
    )
  }

export default Aside