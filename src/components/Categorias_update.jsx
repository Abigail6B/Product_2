import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Categorias_update = () => {

    const [codigo, setCodigo] = useState('');
    const [tipo, setTipo] = useState('');
    const [fecha_alta, setFecha_alta] = useState('2023-08-03 10:00:00')

    const handleUp = (id_categoria) =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "codigo": codigo,
        "tipo": tipo,
        "fecha_alta": fecha_alta
        });

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`http://localhost/prueba_1/index.php/Api/CATEGORIA/${id_categoria}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    const amarillo={
        background:'#ffde59'
      }
      const cafe={
          background:'#8e582c'
      }
      const icon={
        color:'#8e582c'
      }
      const iconN={
        color:'#000'
      }
      const letras={
        color:'#FFFF'
      }
  return (
    <>
        <div className='content-wrapper'>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Categorias</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Categorias</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
  
      <section className='content'>
       
      <div className="card ">
          <div className="card-header"style={cafe}>
            <h3 className="card-title" style={letras}><i className="fas fa-plus-square" style={letras}></i>Registro de Categorias</h3>
  
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                <i className="fas fa-minus" style={iconN}></i>
              </button>
            </div>
          </div>
            <div className="card-body" style={amarillo}>
            <div className='form-group'>
                <label htmlFor="">Código de Categoria</label>
                <input  className="form-control" type="text" id='' name='cod_cat' placeholder='Escribe aqui'  valor={codigo} onChange={event => setCodigo(event.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="">Tipo</label>
              <input  className="form-control" type="text" id='tip' name='tip' placeholder='Escribe aqui' valor={tipo} onChange={event => setTipo(event.target.value)} />
            </div>
            <div className="form-group">
              <label  >Fecha de alta</label>
              <input type="date" className='form-control' id='fecha' name='fecha' valor={fecha_alta} onChange={event => setFecha_alta(event.target.value)}/>
            </div>
          </div>
          
          <div className="card-footer">
            <Link to='/Categorias' className="btn btn-secondary">
              Cancelar
            </Link>
            <button className="btn submited float-right" style={cafe}><b style={letras} onClick={()=>handleUp()}> Aceptar </b></button>
          </div>
        </div>
      </section>
      </div>
        
    </>
  )
}
