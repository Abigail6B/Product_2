import React from 'react'
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
}

export default Home