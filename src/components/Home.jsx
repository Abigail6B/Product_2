import React from 'react'
<<<<<<< HEAD
import mueble1 from '../assets/mueble1.jpg'
import mueble2 from '../assets/mueble2.jpg'
import mueble3 from '../assets/mueble3.jpg'
import '../css/Home.css'

function Home() {
    return (
        <>
            <div className='col-lg-12 container justify-content-center text-center'>
                <br />
                <h2>DAF MUEBLERIA</h2>
                <br />
            </div>
            <div className="m-0 row justify-content-center text-ceter col-lg-12">
                <div id="carouselExample" className="col-lg-8 carousel slide">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active color-black" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={mueble1} className="d-block w-100" alt="mueble" />
                            </div>
                            <div className="carousel-item">
                                <img src={mueble2} className="d-block w-100" alt="mueble" />
                            </div>
                            <div className="carousel-item">
                                <img src={mueble3} className="d-block w-100" alt="mueble" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Anterior</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Siguiente</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
=======
import DAF from '../assets/DAF.png'

const Home = () => {
    const  rosa={
        background:'#FFDDD2',
    }
    const azul={
        background:'#83C5BE'
    }
    const azul_f={
        background:'#387283'
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
>>>>>>> Abigail
}

export default Home