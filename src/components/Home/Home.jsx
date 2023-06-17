import React from "react";
import "./Home.css";
import logo from "../../assets/logo.png";
import mueble1 from "../../assets/mueble1.jpg";
import mueble2 from "../../assets/mueble2.jpg";
import mueble3 from "../../assets/mueble3.jpg";

const Home = () => {
    return (
        <>
            <nav className="navbar navbar-dark">
                <div className="">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="90" height="90" className="logo d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={mueble1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={mueble2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={mueble3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Home;