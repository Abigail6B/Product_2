import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export const Entradas_Salidas_update = () => {

    //estilos parra los fondos de diferntes colores
    const amarillo={
        background:'#ffde59'
      }
    const cafe={
        background:'#8e582c'
    }
    
    const icon={
        color:'#8e582c'
    }
    const letras={
        color:'#FFFF'
    }

    //Declaracion de variables de estado para cada uno de los campos de la tabla de entradas y salida en base de datos
    const [id_producto, setId_producto] = useState('');
    const [tipo, setTipo] = useState('');
    const [fecha, setFecha] = useState('');
    const [listaP, setListaP] = useState([]);

     //Utilizamos params ya que nos permite acceder desde un componente a los parámetros de la ruta
    const params = useParams();

    //Metodo para actualizar una entrada o salida
    const handleUp = () =>{
        //Formato de importacion JavaScript-Fetch que nos arroja postman y se asignan las variables de estado
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "tipo": tipo,
        "id_producto": id_producto,
        "fecha": fecha
        });

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`http://localhost/prueba_1/index.php/Api/EntradasyS/${params.id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

        //mostrar los registros de entradas y salidas
        const [listaES, setListaES] = useState([])
        const showEs = () =>{
            fetch(`http://localhost/prueba_1/index.php/Api/EntradasyS/${params.id}`)
                .then(response => response.json())
                .then(result => setListaES(result))
                .catch(error => console.log('error', error));
        }
        
        //UseEffect para que nos muestre las entradas y salidas
        useEffect(() => {
            showEs();
        }, []);

        // metodo para traer todos los prodctos de la base d edatos
        const handleShowP = () =>{
            fetch("http://localhost/prueba_1/index.php/Api/PRODUCTOS")
                .then(response => response.json())
                .then(result =>setListaP(result))
                .catch(error => console.log('error', error));
        }

        //UseEffect para que nos muestre los Productos
        useEffect(() => {
            handleShowP();
        }, []);
  return (
    <>
        <div className="content-wrapper">
        <section className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-6">
                <h1>Actualizar entradas y salidas</h1>
            </div>
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Actualizar entradas y salidas</li>
                </ol>
            </div>
            </div>
        </div>
        </section>
         {/* Creacion de formulario para actualizar una entrada y salida  */}
        <section className="content">
        <p className=" rounded pl-1 pr-1"><strong>Instrucciones:</strong> Lee cuidadosamente cada uno de los datos que se te piden. <strong >(1) En la parte izquierda podras observar lo que contiene la entrada y salida que seleccionaste </strong>, <strong >(2) y en la parte derecha deberas de llenar cada uno de los recuadros los datos que vas a actualizar</strong>, <strong >(3) si solamente vas a actualizar un solo dato, por favor repite la informacion en los recuadros de la derecha</strong>.</p>
        <div className="card" >
            <div className="card-header" style={cafe}>
            <h3 className="card-title" style={letras}><i className="fas fa-plus-square" style={letras}></i> Registro de entradas y salidas</h3>

            <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                <i className="fas fa-minus"></i>
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                <i className="fas fa-times"></i>
                </button>
            </div>
            </div>
            {/* Se llama OnChange para que se tomen los valores que se estan obteniendo de los input y se utiliza los set, ademas se coloca del lado dreceho los datos que se encuentran actualemnte en base de datos */}
            <div className="card-body " style={amarillo}>
                <div className="row">
                    <div className='col'> 
                        <div className='form-group'>
                            <label htmlFor="">Código del producto </label>
                            <input  className="form-control" disabled="true" type="number" id='' name='cod_cat' value={listaES.id_producto} />
                        </div>
                    </div>
                    <div className='col'> 
                        <div className="form-group ">
                                <label >Codigo del producto</label>
                                <select name="codigoP" id="codigoP" className="form-control" 
                                    required="required" value={id_producto}
                                    onChange={event => setId_producto( event.target.value)}>
                                    <option value="s">Seleccione una opcion</option>

                                        {
                                            listaP.map((lista)=>(
                                                <option value={lista.id_producto}>{lista.cod_producto}</option>
                                            ))
                                        }
                                    </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col'> 
                            <div className="form-group ">
                                <label>Tipo (Entrada/Salida)</label>
                                <select name="tipo" id="tipo" className="form-control" 
                                required="required" disabled="true" value={listaES.tipo}
                                onChange={event => setTipo( event.target.value)}>
                                    <option value="s">Seleccione una opcion</option>
                                    <option value="Entrada">Entrada</option>
                                    <option value="Salida">Salida</option>
                                </select>
                        </div>
                    </div>
                    <div className='col'> 
                            <div className="form-group ">
                                <label>Tipo (Entrada/Salida)</label>
                                <select name="tipo" id="tipo" className="form-control" 
                                required="required" value={tipo}
                                onChange={event => setTipo( event.target.value)}>
                                    <option value="s">Seleccione una opcion</option>
                                    <option value="Entrada">Entrada</option>
                                    <option value="Salida">Salida</option>
                                </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                        <div className="form-group ">
                            <label >Fecha</label>
                            <input className="form-control" type="date" 
                            name="fecha" id="fecha" required="required" 
                            value={fecha}
                            onChange={event => setFecha( event.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                {/* Regresa a entradas y salidas */}
                <Link to='/entradas_salidas' className="btn btn-secondary">
                Regresar
                </Link>
                {/* llamada del metodo handleUp con el evento onClick esto para mandar a base de datos la actualizacion de una entrada o salida*/}
                <button className="btn submited float-right" style={cafe}><b style={letras} onClick={()=>handleUp()}> Aceptar </b></button>
            </div>
        </div>

        
        

        </section>
    </div>
    </>
  )
}
