import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Categorias_update = () => {

  //Declaracion de variables de estado para cada uno de los campos de la tabla de  Categorias en base de datos
    const [codigo, setCodigo] = useState('');
    const [tipo, setTipo] = useState('');
    const [fecha_alta, setFecha_alta] = useState('2023-08-03 10:00:00')

    //Utilizamos params ya que nos permite acceder desde un componente a los parámetros de la ruta
    const params = useParams();

    //Metodo para actualizar una categoria 
    const handleUp = () =>{
      //Formato de importacion JavaScript-Fetch que nos arroja postman y se asignan las variables de estado
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

        //Api PUT
        fetch(`http://localhost/prueba_1/index.php/Api/CATEGORIA/${params.id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    //Declaracion de variable de estado para mostrar las catregorias que se encuentran en la base de datos
    let [data, setData] = useState([])

    //Metodo ShowCate nos ayuda a traer todas las categorias registrados en la base de datos (GET)
    //Api GET
    const showCategoria = () =>{
      fetch(`http://localhost/prueba_1/index.php/Api/CATEGORIA/${params.id}`)
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.log('error', error));
    }

    //UseEffect para que nos muestre las categorias
    useEffect(() => {
      showCategoria();
    }, [])
    
    
    /* estilos para el frontend */

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
     {/* Inicio de contenido  */}
        <div className='content-wrapper'>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1> Actualiza Categorias</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Actualiza Categorias</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
  
   {/* Creacion de formulario para actualizar una categoria  */}
      <section className='content'>
      <p className=" rounded pl-1 pr-1"><strong>Instrucciones:</strong> Lee cuidadosamente cada uno de los datos que se te piden. <strong >(1) En la parte izquierda podras observar lo que contiene la categoria seleccionada </strong>, <strong >(2) y en la parte derecha deberas de llenar cada uno de los recuadros los datos que vas a actualizar</strong>, <strong >(3) si solamente vas a actualizar un solo dato, por favor repite la informacion en los recuadros de la derecha</strong>.</p>
        <div className="card ">
          <div className="card-header"style={cafe}>
            <h3 className="card-title" style={letras}><i className="fas fa-plus-square" style={letras}></i>Registro de Categorias</h3>
  
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                <i className="fas fa-minus" style={iconN}></i>
              </button>
            </div>
          </div>{/* Se llama OnChange para que se tomen los valores que se estan obteniendo de los input y se utiliza los set, ademas se coloca del lado dreceho los datos que se encuentran actualemnte en base de datos */}

            <div className="card-body" style={amarillo}>
                <div className='row'>
                    <div className='col'>
                        <div className='form-group'>
                            <label htmlFor="">Código de Categoria</label>
                            <input  className="form-control" disabled="true" type="text" id='' name='cod_cat' value={data.codigo} />
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <label htmlFor="">Código de Categoria</label>
                            <input  className="form-control" type="text" id='' name='cod_cat' placeholder='Escriba aqui' valor={codigo} onChange={event => setCodigo(event.target.value)} required="required"/>
                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className='col'>
                        <div className="form-group">
                            <label htmlFor="">Tipo</label>
                            <input  className="form-control" disabled="true" type="text" id='tip' name='tip' value={data.tipo} />
                        </div> 
                    </div>
                    <div className='col'>
                        <div className="form-group">
                            <label htmlFor="">Tipo</label>
                            <input  className="form-control" type="text" id='tip' name='tip' placeholder='Escribe aqui' valor={tipo} onChange={event => setTipo(event.target.value)} required="required"/>
                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className='col'>
                        <div className="form-group">
                            <label  >Fecha de alta</label>
                            <input type="date" disabled="true" className='form-control' id='fecha' name='fecha'  value={data.fecha_alta} />
                        </div> 
                    </div>
                    <div className='col'>
                        <div className="form-group">
                            <label  >Fecha de alta</label>
                            <input type="date" className='form-control' id='fecha' name='fecha'  valor={fecha_alta} onChange={event => setFecha_alta(event.target.value)} required="required"/>
                        </div>
                    </div>

                </div>
          </div>
          
          <div className="card-footer">
            {/* Regresa a categorias */}
            <Link to='/Categorias' className="btn btn-secondary">
              Regresar
            </Link>
            {/* llamada del metodo handleUp con el evento onClick esto para mandar a base de datos la actualizacion de una categoria*/}
            <button className="btn submited float-right" style={cafe}><b style={letras} onClick={()=>handleUp()}> Aceptar </b></button>
          </div>
        </div>
      </section>
      </div>
        
    </>
  )
}
