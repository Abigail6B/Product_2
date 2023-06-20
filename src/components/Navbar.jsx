import React from 'react'
import DAF from '../assets/logo.png'

export const Navbar = () => {
  const azulF = {
    background: '#006D77'
  }
  const icon = {
    color: "#ffffff",
  }
  return (
    <>

      <nav className="navbar navbar-expand navbar-info navbar-light" style={azulF}>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/">
              <img src={DAF} width="60" height="60" />
            </a>
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars fa-lg" style={icon}></i></a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">

          <li className="nav-item">
            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
              <i className="fas fa-sign-out-alt fa-lg" style={icon}></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
