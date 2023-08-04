import React from 'react'

function Productos_geren() {

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
                <h1>Productos Generencia</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Productos Generencia</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="card">
            <div className="card-body card-info">
              <table className="table table-bordered table-hover table-striped" id="table">
                <thead style={cafe}>
                  <tr>
                    <th style={letras}>No.</th>
                    <th style={letras}>Código</th>
                    <th style={letras}>Marca</th>
                    <th style={letras}>No.Pza</th>
                    <th style={letras}>Color</th>
                    <th style={letras}>Material</th>
                    <th style={letras}>Unidades</th>
                    <th style={letras}>Dimensiones</th>
                    <th style={letras}>Precio</th>
                    <th style={letras}>Descripcion</th>
                    <th style={letras}>Fecha</th>
                    <th style={letras}>Fotografía</th>

                  </tr>
                </thead>
                <tbody style={amarillo}>
                  <tr>
                    <td>1</td>
                    <td>SN_7821</td>
                    <td>Troncoso</td>
                    <td>16062023</td>
                    <td>Cafe ocre</td>
                    <td>Porcelanico</td>
                    <td>23</td>
                    <td>23cm x 50cm</td>
                    <td>20853</td>
                    <td>Madera de buena calidad...</td>
                    <td>26/07/2023</td>
                    <td>mueble.jpg</td>
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

export default Productos_geren