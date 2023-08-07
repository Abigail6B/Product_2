import React from 'react'
import { useState, useEffect } from "react"

export const Content = () => {
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

    const [id_producto, setId_producto] = useState('');
    const [tipo, setTipo] = useState('');
    const [fecha, setFecha] = useState('');
    const [listaP, setListaP] = useState([]);

    const handleAddES= () =>{
        var formdata = new FormData();
                formdata.append("tipo", tipo);
                formdata.append("id_producto", id_producto);
                formdata.append("fecha", fecha);

                var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
                };

                fetch("http://localhost/prueba1/index.php/Api/EntradasyS/", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
    }

//mostrar los registros de entradas y salidas
        const [listaES, setListaES] = useState([])
        fetch("http://localhost/prueba1/index.php/Api/EntradasyS")
        .then(response => response.json())
        .then(result => setListaES(result))
        .catch(error => console.log('error', error));

//mostrar los productos en el formulario
    useEffect(() => {
        handleShowP();
    }, []);
    
    const handleShowP = () =>{
        fetch("http://localhost/prueba1/index.php/Api/PRODUCTOS")
            .then(response => response.json())
            .then(result =>setListaP(result))
            .catch(error => console.log('error', error));
    }
 //metodo para eliminar registros   
    const handleDeleteES = (id) =>{
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch(`http://localhost/prueba1/index.php/Api/EntradasyS/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

  return (
    <>
    <div className="content-wrapper">
        <section className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-6">
                <h1>Registro de entradas y salidas</h1>
            </div>
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Registro de entradas y salidas</li>
                </ol>
            </div>
            </div>
        </div>
        </section>

        <section className="content">

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
            <div className="card-body " style={amarillo}>
                <div className="row">
                        <div className="form-group col-4">
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
                        <div className="form-group col-4">
                                <label>Tipo (Entrada/Salida)</label>
                                <select name="tipo" id="tipo" className="form-control" 
                                required="required" value={tipo}
                                onChange={event => setTipo( event.target.value)}>
                                    <option value="s">Seleccione una opcion</option>
                                    <option value="Entrada">Entrada</option>
                                    <option value="Salida">Salida</option>
                                </select>
                        </div>
                        <div className="form-group col-4">
                            <label >Fecha</label>
                            <input className="form-control" type="date" 
                            name="fecha" id="fecha" required="required" 
                            value={fecha}
                            onChange={event => setFecha( event.target.value)}/>
                        </div>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn submited float-right" style={cafe}> <b style={letras} onClick={ ()=> handleAddES() }> Aceptar</b></button>
            </div>
        </div>

        
        <div className="card">
            <div className="card-body card-info">
                <table className="table table-bordered table-hover table-striped" id="table_ensal">
                    <thead>
                        <tr className="text-center" style={cafe}>
                            <th style={letras}>No.</th>
                            <th style={letras}>Tipo</th>
                            <th style={letras}>Producto</th>
                            <th style={letras}>Fecha</th>
                            <th style={letras}>Opciones</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            listaES.map((es) =>(
                                <tr style={amarillo}>
                                    <td>{es.id_registro}</td>
                                    <td>{es.tipo}</td>
                                    <td>{es.id_producto}</td>
                                    <td>{es.fecha}</td>
                                    <td>
                                         <button className='btn col-lg-4 offset-md-1'><i className="fas fa-trash-alt " alt="bote de basura" style={icon}
                                         onClick={()=>handleDeleteES(es.id_registro)}></i></button>
                                         <i className="fas fa-pen" style={icon}></i>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div> 

        </section>
    </div>
    </>
  )
}
