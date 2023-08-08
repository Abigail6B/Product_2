//IMPORTACIÓN DE LAS LLIBRERIAS NECESARIAS PARA EL USO DE METODOS DE REACT
import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
const Usuarios = () => {
    //se crean estilos para las fuentes y los iconos
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

   //las variables de estados que sirven para recuperar los valores y guardarlos.    
       const [clave_empleado, setClave_empleado] = useState('');
       const [nombre, setNombre] = useState('');
       const [apellido_p, setApellido_p] = useState('');
       const [apellido_m, setApellido_m] = useState('');
       const [puesto, setPuesto] = useState('');
       const [fotografia, setFotografia] = useState('');
       const [user, setUser] = useState('');
       const [password, setPassword] = useState('');
       const [fecha_alta, setFecha_alta] = useState('');
       //console.log(usu);

       //metodo para guardar usuarios
       const handleAdd = () =>{
        var formdata = new FormData();
        formdata.append("clave_empleado", clave_empleado);
        formdata.append("nombre", nombre);
        formdata.append("apellido_p", apellido_p);
        formdata.append("apellido_m", apellido_m);
        formdata.append("puesto", puesto);
        formdata.append("fotografia", fotografia);
        formdata.append("user", user);
        formdata.append("password", password);
        formdata.append("fecha_alta", fecha_alta);

        var requestOptions = {
            mode: 'no-cors',
            header: {
                'Content-type ' : "application/json, charset=utf-8"
            },
            method: 'POST',
            body: formdata,
        };

        fetch("http://localhost/prueba_1/index.php/Api/Usuarios/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
       }
       
    //permite mostrar los usuarios registrados
    const [usu, setUsu] = useState([])
    const showUser =  () =>{
                fetch("http://localhost/prueba_1/index.php/Api/Usuarios/")
                .then(response => response.json())
                .then(result => setUsu(result))
                .catch(error => console.log('error', error));
                //console.log(usu);

    }

    useEffect(() => {
      showUser()
    }, []);
    

//metodo para eliminar un usuario
       const handleDelete =(id)=>{
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
        fetch(`http://localhost/prueba_1/index.php/Api/Usuarios/${id}`,requestOptions )
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
       }
      //console.log(usu);
      const [foto, setFoto] = useState(null);
      const handleFoto=()=>{
           // console.log(event.target.files[0]);
           setFoto(event.target.files[0]);
      }
      const handleSend=()=>{
        if(!foto){
            alert("Carge archivo");
        }
        var formdata = new FormData();
        formdata.append("clave_empleado", "190");
        formdata.append("nombre", "Jovanny");
        formdata.append("apellido_p", "Jimenez");
        formdata.append("apellido_m", "Lopez");
        formdata.append("puesto", "Gerente");
        formdata.append("fotografia", foto);
        formdata.append("user", "Jovas");
        formdata.append("password", "12345");
        formdata.append("fecha_alta", "2023-08-05");

        var requestOptions = {
            mode: 'no-cors',
            header: {
                'Content-type ' : "application/json, charset=utf-8"
            },
            method: 'POST',
            body: formdata,
        };

        fetch("http://localhost/prueba_1/index.php/Api/Usuarios/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
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

          
            <div className="card ">
                <div className="card-header" style={cafe}>
                <h3 className="card-title" style={letras}><i className="fas fa-plus-square" style={letras}></i>Registro de Usuarios</h3>

                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus" style={iconN}></i>
                    </button>
                </div>
                </div>
                <div className="card-body" style={amarillo}>
                    <div className="row">
                            <div className="col-4">
                                <div className='form-group'>
                                    <label htmlFor="">Clave del empleado </label>
                                    <input  className="form-control" type="text" 
                                    id='clave_emp' name='clave_emp' 
                                    placeholder='Escribe aqui'
                                    valor={clave_empleado}
                                    onChange={event => setClave_empleado( event.target.value)} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='form-group'>
                                    <label htmlFor="">Puesto</label>
                                    <select  className="form-control" type="text" 
                                    id='puesto' name='puesto' 
                                    placeholder='Escribe aqui'
                                    valor={puesto}
                                    onChange={event => setPuesto( event.target.value)} >
                                        <option value="">Seleccione una opción</option>
                                        <option value="Administrador">Administrador</option>
                                        <option value="Operador">Operador de Almacén</option>
                                        <option value="Jefe">Jefe de Almacén</option>
                                        <option value="Gerente">Gerente</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='form-group'>
                                    <label htmlFor="">Fecha de alta</label>
                                    <input  className="form-control" type="date" 
                                    id='fecha' name='fecha' valor={fecha_alta}
                                    onChange={event => setFecha_alta( event.target.value)}/>
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className='form-group'>
                                <label htmlFor="">Nombre del Empleado</label>
                                <input  className="form-control" type="text" 
                                id='nombre' name='nombre' placeholder='Escribe aqui'
                                valor={nombre}
                                onChange={event => setNombre( event.target.value)} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='form-group'>
                                <label htmlFor="">Apellido Paterno</label>
                                <input  className="form-control" type="text" 
                                id='a_paterno' name='a_paterno' placeholder='Escribe aqui'
                                valor={apellido_p}
                                onChange={event => setApellido_p( event.target.value)} />
                            </div>
                        </div>
                        <div className="col-4">
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
                        <div className="col-4">
                            <div className='form-group'>
                                <label htmlFor="">Usuario</label>
                                <input  className="form-control" type="text" 
                                id='user' name='user' placeholder='Escribe aqui'
                                valor={user}
                                onChange={event => setUser( event.target.value)} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='form-group'>
                                <label htmlFor="">Contraseña</label>
                                <input  className="form-control" type="text" 
                                id='password' name='password' placeholder='Escribe aqui' 
                                valor={password}
                                onChange={event => setPassword( event.target.value)}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="">Fotografía</label>
                                <input type="file" className='form-control' id='foto' 
                                name='foto' valor={fotografia} 
                                onChange={()=> setFotografia( event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="card-footer">
                    <Link to='/Home' className="btn btn-secondary">Cancelar</Link>
                    <button className="btn submited float-right" style={cafe} onClick={ ()=> handleAdd() }>Aceptar</button>
                </div>
            </div>
            

<div>
        <table className="table table-bordered table-striped table-hover" id='table_User'>
            <thead style={cafe}>
                <tr>
                    <th style={letras}>No.</th>
                    <th style={letras}>Clave</th>
                    <th style={letras}>Puesto</th>
                    <th style={letras}>Nombre</th>
                    <th style={letras}>Usuario</th>
                    <th style={letras}>Contraseña</th>
                    <th style={letras}>Fotografía</th>
                    <th style={letras}>Fecha</th>
                    <th style={letras}>Opciones</th>
                </tr>
            </thead>
            <tbody style={rosa}>
                { usu.map((u) =>(
                        <tr key={u.id_usuario}>
                            <td>{u.id_usuario}</td>
                            <td>{u.clave_empleado}</td>
                            <td>{u.puesto}</td>
                            <td>{u.nombre} {u.apellido_p} {u.apellido_m}</td>
                            <td>{u.user}</td>
                            <td>{u.password}</td>
                            <td>{u.fotografia}</td>
                            <td>{u.fecha_alta}</td>
                            <td>
                            <button className='btn col-lg-4 offset-md-1' onClick={()=>handleDelete(u.id_usuario)}><i className="fas fa-trash-alt " alt="bote de basura" style={icon}></i></button>
                            <button className='btn col-lg-4 offset-md-1 '> <Link to={`/usuario_actualizar/${u.id_usuario}`} className=""><i className="fas fa-pen" style={icon}></i></Link></button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            <tfoot>
                       
                        </tfoot>
        </table>
    </div>
            </div>
            </div>
        </>
    )
}

export default Usuarios