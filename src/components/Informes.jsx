import React from 'react'

const Informes = () => {
    const rosa = {
        background: '#FFDDD2',
    }
    const azul = {
        background: '#83C5BE'
    }
    const icon = {
        color: '#83C5BE'
    }
    const iconN = {
        color: '#000'
    }

    return (
        <> 
            <div className='content-wrapper col-9 '>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Informes de Producto</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Informes</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='content'>
                    <div className="card ">
                        <div className="card-header" style={azul}>

                            <div className="card-tools">
                                <p></p>
                            </div>
                        </div>
                        <div className="card-body" style={rosa}>
                            <div className="form-group">
                                <label htmlFor="">Categoría</label>
                                <select className="form-control" name="tipo" id="tipo">
                                    <option value="">-Seleccione-</option>
                                    <option value="Recamaras">Recamaras</option>
                                    <option value="Oficina">Oficina</option>
                                    <option value="Sala">Sala</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Producto</label>
                                <select className="form-control" name="tipo" id="tipo">
                                    <option value="">-Seleccione-</option>
                                    <option value="Recamaras">Mesa</option>
                                    <option value="Oficina">Sofas</option>
                                    <option value="Sala">Taburete</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Tipo</label>
                                <select className="form-control" name="tipo" id="tipo">
                                    <option value="">-Seleccione-</option>
                                    <option value="Recamaras">Entrada</option>
                                    <option value="Oficina">Salida</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Informes