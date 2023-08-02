import React from 'react'
import DAF from '../assets/DAF.png'

export const Navbar =() => {
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
              <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" style={blanco}></i></a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
        
        <li className="nav-item">
            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button" >
            <i className="fas fa-sign-out-alt" style={blanco}></i>
            </a>
        </li>
        </ul>
    </nav>
    </>
  )
}
