import React from 'react'

export const Categorias_geren = () => {
    const rosa={
        background:'#ffde59'
      }
    const azul={
        background:'#8e582c'
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
                            <tr className="text-center" style={azul}>
                                <th>No.</th>
                                <th>Codigo</th>
                                <th>Tipo</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr style={rosa}>
                                <td>1</td>
                                <td>SN_7821</td>
                                <td>Sillones</td>
                                <td>16/06/2023</td>
                            </tr>
                        
                        </tbody>
                    </table>
                </div>
            </div> 
        </section>
    </div>
    </>
    
  )
}
