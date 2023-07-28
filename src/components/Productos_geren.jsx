import React from 'react'

function Productos_geren() {

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
                <thead style={azul}>
                  <tr>
                    <th>No.</th>
                    <th>Código</th>
                    <th>Marca</th>
                    <th>No.Pza</th>
                    <th>Color</th>
                    <th>Material</th>
                    <th>Unidades</th>
                    <th>Dimensiones</th>
                    <th>Precio</th>
                    <th>Descripcion</th>
                    <th>Fecha</th>
                    <th>Fotografía</th>

                  </tr>
                </thead>
                <tbody style={rosa}>
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