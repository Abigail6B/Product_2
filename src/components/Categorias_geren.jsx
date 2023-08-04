import React, { useState } from 'react'

export const Categorias_geren = () => {

    const [data, setData] = useState([])
        fetch("http://localhost/prueba_1/index.php/Api/CATEGORIA")
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.log('error', error));
    

    const amarillo={
        background:'#ffde59'
      }
    const cafe={
        background:'#8e582c'
    }
    const letras={
        color:'#FFFF'
    }
  return (
    <>
    <div className="content-wrapper">
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                <div className="col-sm-6">
                    <h1>Categorias Generencia</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Categorias Generencia</li>
                    </ol>
                </div>
                </div>
            </div>
        </section>

        <section className="content">
             <div className="card">
                <div className="card-body card-info">
                    <table className="table table-bordered table-hover table-striped" id="table">
                        <thead>
                            <tr className="text-center" style={cafe}>
                                <th style={letras}>No.</th>
                                <th style={letras}>Codigo</th>
                                <th style={letras}>Tipo</th>
                                <th style={letras}>Fecha</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                        {data.map((cate)=>(
                            <tr key={cate.id_categoria} style={amarillo} >
                            <td>{cate.id_categoria}</td>
                            <td>{cate.codigo}</td>
                            <td>{cate.tipo}</td>
                            <td>{cate.fecha_alta}</td>
                        </tr>
                            
                        ))}
                        
                        </tbody>
                    </table>
                </div>
            </div> 
        </section>
    </div>
    </>
    
  )
}
