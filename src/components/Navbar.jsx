import React from 'react'
import { Link } from "react-router-dom"
import DAF from '../assets/DAF.png' //se importa el logo de la empresa

export const Navbar =() => {
  //se agregan estilos para cambiar el color del header
  const azulF={
    background:'#8e582c'
  }
  const blanco={
    background:'#FFFF'
  }
  return (
    <>
         
    <nav className="main-header navbar navbar-expand navbar-info navbar-light" style={azulF}>

        <ul className="navbar-nav">
              <li className="nav-item">
                  <img src={DAF} width="60" height="60" />
              </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link text-white" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link to="/" className="brand-link">
            
            <i className="fas fa-sign-out-alt"></i>
            </Link>
            
        </li>
        </ul>
    </nav>
    </>
  )
}
