import React from 'react'
import DAF from '../assets/DAF.png'

const Home = () => {
  const rosa={
    background:'#ffde59'
  }
const azul={
    background:'#8e582c'
}
    const azul_f={
        background:'#8e582c'
    }
    const blanco={
        background:'#FFFF'
    }
  return (
    <>
    <div className='p-5' style={azul_f}></div>
<div className="mx-auto" style={{width:" 600px", 
  padding: "-20%", margin: "3%"}}>
  <div className="login-logo">
    <img src={DAF} width="180" height="180" />
  </div>
  <div className="card" >
    <div className="card-body login-card-body " style={rosa}>
      <p className="login-box-msg"><b> ¡Bienvenido inicia sesion! </b></p>

      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Nombre de usuario" />
          <div className="input-group-append">
            <div className="input-group-text " style={blanco}>
              <span className="fas fa-user" style={blanco}></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Usuario" />
          <div className="input-group-append">
            <div className="input-group-text" style={blanco}>
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <button type="submit" className="btn  btn-block" style={azul}>Iniciar sesion</button>
          </div>
        </div>
      </form>


    </div>
  </div>
</div>
    </>
  )
}

export default Home