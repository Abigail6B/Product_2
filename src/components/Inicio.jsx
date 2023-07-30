import React from 'react'
import Mu1 from '../assets/mueble1.jpg'
import Mu2 from '../assets/mueble2.jpg'
import Mu3 from '../assets/mueble3.jpg'

export const Inicio = () => {
    
  return (
    <>

    
    
    <div className=" mx-auto" style={{width:" 700px", margin: "3%"}}>

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
<ol className="carousel-indicators">
<li data-target="#carouselExampleIndicators" data-slide-to="0" className=""></li>
<li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
</ol>
<div className="carousel-inner">
<div className="carousel-item">
<img className="d-block w-100" src={Mu1} alt="First slide" />
</div>
<div className="carousel-item active">
<img className="d-block w-100" src={Mu2} alt="Second slide" />
</div>
<div className="carousel-item">
<img className="d-block w-100" src={Mu3} alt="Third slide" />
</div>
</div>
<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
<span className="carousel-control-custom-icon" aria-hidden="true">
<i className="fas fa-chevron-left"></i>
</span>
<span className="sr-only">Previous</span>
</a>
<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
 <span className="carousel-control-custom-icon" aria-hidden="true">
<i className="fas fa-chevron-right"></i>
</span>
<span className="sr-only">Next</span>
</a>
</div>
</div>



    </>
  )
}

