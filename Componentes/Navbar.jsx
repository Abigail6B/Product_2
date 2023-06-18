import React from 'react'

function Navbar() {
  const azulF={
    background:'#006D77'
  }
  const icon={
    color:'#fff'
  }

  return (
    <>
      <nav className="main-header navbar navbar-expand-md navbar-light navbar-white" style={azulF}>
      <div className="container">
        <img src="./DAF.png" alt="Logo DAF" />
        <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
          <li className="nav-item">
            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
              <i className="fas fa-th-large" style={icon}></i>
            </a>
          </li>
        </ul>
      </div>
      </nav>
    </>
  )
}

export default Navbar;