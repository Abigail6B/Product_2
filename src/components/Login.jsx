import React from 'react'
import login from '../assets/login.svg'
import '../css/Login.css'
export default function Login() {
  return (
    <>
      <br />
      <div className="container login-container">
        <div className="user-icon">
          <img src={login} />
        </div>
        <div className="inputs">
          <h3>Login</h3>
          <input type="email" placeholder="USER" />
          <br />
          <input type="password" placeholder="PASSWORD" />
          <br />
          <input type="button" className="btn" value="Iniciar Sesion" id="btn-login" />
        </div>
        <div className="mensajes">
          <a href="#">¿Olvido su contraseña?</a>
          <br />
          <a href="#">Registrarte</a>
        </div>
        <br /> <br />
      </div>

    </>
  )
}
