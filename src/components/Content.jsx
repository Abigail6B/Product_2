import React from 'react'

export const Content = () => {
    const  rosa={
        background:'#FFDDD2',
    }
    const azul={
        background:'#83C5BE'
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
            <div className="card-header" style={azul}>
            <h3 className="card-title"><i className="fas fa-plus-square"></i> Registro de entradas y salidas</h3>

            <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                <i className="fas fa-minus"></i>
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                <i className="fas fa-times"></i>
                </button>
            </div>
            </div>
            <div className="card-body " style={rosa}>
                <div className="row">
                        <div className="form-group col-6">
                            <label >Codigo del producto</label>
                            <input className="form-control" type="text" name="codigo" id="codigo" placeholder="Escriba aqui" required="required" />
                        </div>
                        <div className="form-group col-6">
                                <label>Tipo (Entrada/Salida)</label>
                                <select name="tipo" id="tipo" className="form-control" required="required">
                                    <option value="s">Seleccione una opcion</option>
                                    <option value="1">Entrada</option>
                                    <option value="2">Salida</option>
                                </select>
                        </div>
                </div>
            </div>
            <div className="card-footer" style={rosa}>
                <button className="btn btn-info submited float-right">Aceptar</button>
            </div>
        </div>

        
        <div className="card">
            <div className="card-body card-info">
                <table className="table table-bordered table-hover table-striped" id="table_ensal">
                    <thead>
                        <tr className="text-center" style={azul}>
                            <th>No.</th>
                            <th>Catalogo</th>
                            <th>Tipo</th>
                            <th>Fecha</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr style={rosa}>
                            <td>1</td>
                            <td>Sillones</td>
                            <td>Entrada</td>
                            <td>16/06/2023</td>
                            <td>
                                <i className="fas fa-trash-alt text-red" alt="bote de basura"></i>
                                <i className="fas fa-pen"></i>
                            </td>
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
