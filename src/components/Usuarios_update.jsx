import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export const Usuarios_update = () => {
    
    //Declaracion de variables de estado para cada uno de los campos de la tabla de  usuarios en base de datos
       const [clave_empleado, setClave_empleado] = useState('');
       const [nombre, setNombre] = useState('');
       const [apellido_p, setApellido_p] = useState('');
       const [apellido_m, setApellido_m] = useState('');
       const [puesto, setPuesto] = useState('');
       const [fotografia, setFotografia] = useState('');
       const [user, setUser] = useState('');
       const [password, setPassword] = useState('');
       const [fecha_alta, setFecha_alta] = useState('');

       //Utilizamos params ya que nos permite acceder desde un componente a los parámetros de la ruta
       const params = useParams();

       //Metodo para actualizar un usuario
        const handleUp = () =>{
            //Formato de importacion JavaScript-Fetch que nos arroja postman y se asignan las variables de estado
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "clave_empleado": clave_empleado,
            "nombre": nombre,
            "apellido_p": apellido_p,
            "apellido_m": apellido_m,
            "puesto": puesto,
            "fotografia": fotografia,
            "user": user,
            "password": password,
            "fecha_alta": fecha_alta
            });

            var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch(`http://localhost/prueba_1/index.php/Api/Usuarios/${params.id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }

        //Declaracion de variable de estado para mostrar los usuarios que se encuentran en la base de datos
        let [data, setData] = useState([])

        //Metodo ShowUser nos ayuda a traer todas los productos registrados en la base de datos (GET)
        //Api GET
        const showUser = () =>{
            fetch(`http://localhost/prueba_1/index.php/Api/Usuarios/${params.id}`)
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.log('error', error));

        }

        //UseEffect para que nos muestre los Productos
        useEffect(() => {
          showUser();
        }, [])
        
        
        /* Estilos de color de frontend */
       const rosa={
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
        const amarillo={
            background:'#ffde59'
        }
        const letras={
            color:'#FFFF'
        }
  return (
    <>
        <div className='content-wrapper'>
            <div className='md-8'>
            <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                <div className="col-sm-6">
                    <h1>Usuarios</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Usuarios</li>
                    </ol>
                </div>
                </div>
            </div>
            </div>
         {/* Creacion de formulario para actualizar un usuario  */}
          <p className=" rounded pl-1 pr-1"><strong>Instrucciones:</strong> Lee cuidadosamente cada uno de los datos que se te piden. <strong >(1) En la parte izquierda podras observar lo que contiene la categoria seleccionada </strong>, <strong >(2) y en la parte derecha deberas de llenar cada uno de los recuadros los datos que vas a actualizar</strong>, <strong >(3) si solamente vas a actualizar un solo dato, por favor repite la informacion en los recuadros de la derecha</strong>.</p>
            <div className="card ">
                <div className="card-header" style={cafe}>
                <h3 className="card-title" style={letras}><i className="fas fa-plus-square" style={letras}></i>Registro de Usuarios</h3>

                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus" style={iconN}></i>
                    </button>
                </div>
                </div>
                {/* Se llama OnChange para que se tomen los valores que se estan obteniendo de los input y se utiliza los set, ademas se coloca del lado dreceho los datos que se encuentran actualemnte en base de datos */}
                <div className="card-body" style={amarillo}>
                    <div className="row">
                            <div className="col">
                                <div className='form-group'>
                                    <label htmlFor="">Clave del empleado </label>
                                    <input className="form-control" disabled="true" type="text" 
                                    id='clave_emp' name='clave_emp' value={data.clave_empleado} />
                                </div>
                            </div>
                            <div className="col">
                                <div className='form-group'>
                                    <label htmlFor="">Clave del empleado </label>
                                    <input  className="form-control" type="text" 
                                    id='clave_emp' name='clave_emp' 
                                    placeholder='Escribe aqui'
                                    valor={clave_empleado}
                                    onChange={event => setClave_empleado( event.target.value)} />
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col">
                                <div className='form-group'>
                                    <label htmlFor="">Puesto</label>
                                    <input  className="form-control" disabled="true" type="text" 
                                    id='puesto' name='puesto' value={data.puesto} />
                                </div>
                            </div>
                            <div className="col">
                                <div className='form-group'>
                                    <label htmlFor="">Puesto</label>
                                    <input  className="form-control" type="text" 
                                    id='puesto' name='puesto' 
                                    placeholder='Escribe aqui'
                                    valor={puesto}
                                    onChange={event => setPuesto( event.target.value)} />
                                </div>
                            </div>
                    </div>
                    <div className="row">
                            <div className="col">
                                <div className='form-group'>
                                    <label htmlFor="">Fecha de alta</label>
                                    <input  className="form-control" disabled="true" type="date" 
                                    id='fecha' name='fecha' value={data.fecha_alta}/>
                                </div>
                            </div>
                            <div className="col">
                                <div className='form-group'>
                                    <label htmlFor="">Fecha de alta</label>
                                    <input  className="form-control" type="date" 
                                    id='fecha' name='fecha' valor={fecha_alta}
                                    onChange={event => setFecha_alta( event.target.value)}/>
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className='form-group'>
                                <label htmlFor="">Nombre del Empleado</label>
                                <input  className="form-control" disabled="true" type="text" 
                                id='nombre' name='nombre' value={data.nombre} />
                            </div>
                        </div>
                        <div className="col">
                            <div className='form-group'>
                                <label htmlFor="">Nombre del Empleado</label>
                                <input  className="form-control" type="text" 
                                id='nombre' name='nombre' placeholder='Escribe aqui'
                                valor={nombre}
                                onChange={event => setNombre( event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className='form-group'>
                                <label htmlFor="">Apellido Paterno</label>
                                <input  className="form-control" disabled="true" type="text" 
                                id='a_paterno' name='a_paterno' value={data.apellido_p}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className='form-group'>
                                <label htmlFor="">Apellido Paterno</label>
                                <input  className="form-control" type="text" 
                                id='a_paterno' name='a_paterno' placeholder='Escribe aqui'
                                valor={apellido_p}
                                onChange={event => setApellido_p( event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <div className='form-group'>
                                <label htmlFor="">Apellido Materno</label>
                                <input  className="form-control" disabled="true" type="text" 
                                id='a_materno' name='a_materno' value={data.apellido_m}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className='form-group'>
                                <label htmlFor="">Apellido Materno</label>
                                <input  className="form-control" type="text" 
                                id='a_materno' name='a_materno' placeholder='Escribir aqui' 
                                valor={apellido_m}
                                onChange={event => setApellido_m( event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <div className='form-group'>
                                <label htmlFor="">Usuario</label>
                                <input  className="form-control" disabled="true" type="text" 
                                id='user' name='user' value={data.user}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className='form-group'>
                                <label htmlFor="">Usuario</label>
                                <input  className="form-control" type="text" 
                                id='user' name='user' placeholder='Escribe aqui'
                                valor={user}
                                onChange={event => setUser( event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <div className='form-group'>
                                <label htmlFor="">Contraseña</label>
                                <input  className="form-control" disabled="true" type="text" 
                                id='password' name='password' value={data.password}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className='form-group'>
                                <label htmlFor="">Contraseña</label>
                                <input  className="form-control" type="text" 
                                id='password' name='password'  placeholder='Escribe aqui' 
                                valor={password}
                                onChange={event => setPassword( event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="">Fotografía</label>
                                <input type="file" className='form-control' id='foto' 
                                name='foto' valor={fotografia}
                                onChange={event => setFotografia( event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* Regresa a usuarios */}
                <div className="card-footer">
                    <Link to='/Usuarios' className="btn btn-secondary">
                    Regresar
                    </Link>
                    {/* llamada del metodo handleUp con el evento onClick esto para mandar a base de datos la actualizacion de un usuario*/}
                    <button className="btn submited float-right" style={cafe}><b style={letras} onClick={()=>handleUp()}> Aceptar </b></button>
                </div>
            </div>
            

<div>
    </div>
            </div>
            </div>
    </>
  )
}
