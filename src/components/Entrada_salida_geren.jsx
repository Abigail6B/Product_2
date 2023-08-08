import React from 'react'
import { useState, useEffect } from "react"

export const Entrada_salida_geren = () => {
    //estilos para darle color a los fondos
    const amarillo={
        background:'#ffde59'
      }
    const cafe={
        background:'#8e582c'
    }
    const letras={
        color:'#FFFF'
    }

    //Declaracion de variable de estado para cada uno de los campos de la tabla de Entradas y salidas en base de datos
    const [listaES, setListaES] = useState([]);

    //UseEffect que ayuda  a mostrar las Entradas y salidas
    useEffect(() => {
        fetch("http://localhost/prueba_1/index.php/Api/EntradasyS")
        .then(response => response.json())
        .then(result => setListaES(result))
        .catch(error => console.log('error', error));
    }, [])
    
  return (
    <>
    
        <div className="content-wrapper">
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                <div className="col-sm-6">
                    <h1>Entradas y salidas Gerencia</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Entradas y salidas Gerencia</li>
                    </ol>
                </div>
                </div>
            </div>
        </section>
        {/* incio de la creacion de tabla  */}
        <section className="content">
            <div className="card">
                <div className="card-body card-info">
                    <table className="table table-bordered table-hover table-striped" id="table_esg">
                        <thead>
                            <tr className="text-center" style={cafe}>
                                <th style={letras}>No.</th>
                                <th style={letras}>Tipo</th>
                                <th style={letras}>Producto</th>
                                <th style={letras}>Fecha</th>
                            </tr>
                        </thead>
                        {/* uso del state “listaEs” que es el que contiene todos los registros, ya que es un arreglo, se utiliza el método “map” para poder acceder a cada registro y poder imprimir en pantalla los datos.  */}
                        <tbody className="text-center">
                            {
                                listaES.map((es) =>(
                                    <tr style={amarillo}>
                                        <td>{es.id_registro}</td>
                                        <td>{es.tipo}</td>
                                        <td>{es.id_producto}</td>
                                        <td>{es.fecha}</td>
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
