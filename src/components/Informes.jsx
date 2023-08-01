import React from 'react'


const Informes = () => {
    const rosa={
        background:'#ffde59'
      }
    const azul={
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
                                    <div className="card-header" style={azul}>
                                        <h3 className="card-title"><i className="fas fa-plus-square"></i>Registro de Categorias</h3>
            
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                                <i className="fas fa-minus" style={iconN}></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body" style={rosa}>
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
                                        <button className="btn  submited" type='' style={azul}>Registrar</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col">
                            <div className="card card-success">
                                <div className="card-header" style={azul}>
                                    <h3 className="card-title">Bar Chart</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart">
                                            <div className="chartjs-size-monitor">
                                                <div className="chartjs-size-monitor-expand">
                                                    <div className="">
                                                        </div>
                                                        </div>
                                                        <div className="chartjs-size-monitor-shrink">
                                                            <div className=""></div>
                                                            </div>
                                                            </div>
                                    <canvas id="barChart" style={estilos} width="361" height="250" className="chartjs-render-monitor"></canvas>
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