import React from 'react'

const Categorias = () => {
  
      const  rosa={
        background:'#FFDDD2',
       }
      const azul={
        background:'#83C5BE'
       }
       const icon={
        color:'#83C5BE'
       }
       const iconN={
        color:'#000'
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
  
      <section className='content'>
      <div className="card ">
          <div className="card-header"style={azul}>
            <h3 className="card-title"><i className="fas fa-plus-square"></i>Registro de Categorias</h3>
  
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                <i className="fas fa-minus" style={iconN}></i>
              </button>
            </div>
          </div>
          <div className="card-body" style={rosa}>
            <div className='form-group'>
                  <label htmlFor="">Código de Categoria</label>
                  <input  className="form-control" type="text" id='cod_cat' name='cod_cat' placeholder='Escribe aqui' />
            </div>
            <div className="form-group">
              <label htmlFor="">Tipo</label>
              <select  className="form-control" name="tipo" id="tipo">
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
      <section className='content'>
          <table className="table table-bordered table-striped table-hover" id='table_Cat'>
              <thead style={azul}>
                  <tr>
                      <th>No.</th>
                      <th>Código</th>
                      <th>Tipo</th>
                      <th>Fecha</th>
                      <th>Opciones</th>
                  </tr>
              </thead>
              <tbody style={rosa}>
                  <tr>
                      <th>1</th>
                      <th>ACCOFF201</th>
                      <th>Oficina</th>
                      <th>15-06-2023</th>
                      <th>
                      <i className="fas fa-trash-alt" alt="bote de basura" style={icon}></i>
                      <i className="fas fa-pen"style={icon}></i>
                      </th>
                  </tr>
              </tbody>
              <tfoot>
                          <tr>
                              <th>Rendering engine</th>
                              <th>Browser</th>
                              <th>Platform(s)</th>
                              <th>Engine version</th>
                              <th>CSS grade</th>
                          </tr>
                          </tfoot>
          </table>
      </section>
      </div>
      </>
    )
  }
  

export default Categorias;