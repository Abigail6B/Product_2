import React from 'react'
import DAF from '../assets/DAF.png'
import { useState} from "react"

const Home = () => {
  //estilos para los fondos de color
  const amarillo={
    background:'#ffde59'
  }
  const cafe={
      background:'#8e582c'
  }
    const cafe_f={
        background:'#8e582c'
    }
    const blanco={
        background:'#FFFF'
    }
    const letras={
      color:'#000'
    }

    //variables de estado
    const [per, setPer] = useState('');
    const [password, setPassword] = useState('');
    const [listaU, setListaU] = useState([]);

   const handleFoto = async() =>{
   }
    fetch("http://localhost/prueba_1/index.php/Api/Usuarios")
    .then(response => response.json())
    .then(result =>setListaU(result))
    .catch(error => console.log('error', error));
    //getData();
    //console.log(listaU);
    const handleLogin = () =>{
      //console.log(listaU);
        listaU.map((li)=>{
          if (li.user==per && li.password==password) {
            //console.log(li.user, li.password);
            if(li.puesto=='Administrador'){
              return window.location.href = "http://localhost:5173/home";
            }
            if(li.puesto=='Operador'){
              return window.location.href = "http://localhost:5173/homeO";
            }
            if(li.puesto=='Jefe'){
              return window.location.href = "http://localhost:5173/homeJ";
            }
            if(li.puesto=='Gerente'){
              return window.location.href = "http://localhost:5173/homeG";
            }
          }
        })
    }

  return (
    <>
    <div className='p-5' style={cafe_f}></div>
<div className="mx-auto" style={{width:" 600px", 
  padding: "-20%", margin: "3%"}}>
  <div className="login-logo">
    <img src={DAF} width="180" height="180" />
  </div>
  <div className="card" >
    {/* Se llama OnChange para que se tomen los valores que se estan obteniendo de los input y se utiliza los set*/}
    <div className="card-body login-card-body " style={amarillo}>
      <p className="login-box-msg" style={letras}><b> ¡Bienvenido inicia sesion! </b></p>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Usuario" valor={per}
          onChange={event => setPer( event.target.value)}/>
          <div className="input-group-append">
            <div className="input-group-text " style={blanco}>
              <span className="fas fa-user" style={blanco}></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Contraseña" 
          valor={password} onChange={event => setPassword( event.target.value)}/>
          <div className="input-group-append">
            <div className="input-group-text" style={blanco}>
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            {/* llamada del metodo handleLogin con el evento onClick esto para mandar ver si algun usuario coincide con lo que se escribieron en los inpus*/}
            <button  className="btn  btn-block" style={cafe}> <b style={letras}
            onClick={()=> handleLogin()}
           > Iniciar sesion </b></button>
          </div>
        </div>


    </div>
  </div>
</div>
    </>
  )
}

export default Home