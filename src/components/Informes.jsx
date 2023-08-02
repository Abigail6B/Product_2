import React from 'react'


const Informes = () => {
    const amarillo={
        background:'#ffde59'
      }
    const cafe={
        background:'#8e582c'
    }
    const icon = {
        color: '#83C5BE'
    }
    const iconN = {
        color: '#000'
    }
    const estilos = {

        height: "50px",
    }
    const letras={
        color:'#FFFF'
    }

    return (
        <> 
            <div className='content-wrapper'>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Categorias</h1>
                             </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Categorias</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <section className='content'>
                                <div className="card ">
                                    <div className="card-header" style={cafe}>
                                        <h3 className="card-title" style={letras}><i className="fas fa-plus-square" style={letras}></i>Registro de Categorias</h3>
            
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                                <i className="fas fa-minus" style={iconN}></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body" style={amarillo}>
                                        <div className="form-group">
                                            <label >Tipo</label>
                                            <select  className="form-control" name="tipo" id="tipo">
                                                <option value="">-Seleccione-</option>
                                                <option value="Recamaras">Recamaras</option>
                                                <option value="Oficina">Oficina</option>
                                                <option value="Sala">Sala</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label >Tipo2</label>
                                            <select  className="form-control" name="tipo2" id="tipo2">
                                                <option value="">-Seleccione-</option>
                                                <option value="Recamaras">Recamaras</option>
                                                <option value="Oficina">Oficina</option>
                                                <option value="Sala">Sala</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label >Tipo3</label>
                                            <select  className="form-control" name="tipo3" id="tipo3">
                                                <option value="">-Seleccione-</option>
                                                <option value="Recamaras">Recamaras</option>
                                                <option value="Oficina">Oficina</option>
                                                <option value="Sala">Sala</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn submited float-right" style={cafe}><b style={letras}> Aceptar</b></button>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col">
                            <div className="card card-success">
                                <div className="card-header" style={cafe}>
                                    <h3 className="card-title" style={letras}> <b>Estadisticas</b></h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart">
                                        <canvas id="barChart" style={{minHeight: "250px", height: "250px", maxHeight: "250px", maxWidth: "100%"}}></canvas>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
  
                
            </div>

                
            
        </>
    )
}

export default Informes