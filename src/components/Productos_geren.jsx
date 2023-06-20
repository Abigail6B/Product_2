import React from 'react'

function Productos_geren() {

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
                <thead>
                  <tr className="text-center">
                    <th>No.</th>
                    <th>Código</th>
                    <th>Marca</th>
                    <th>No.Pza</th>
                    <th>Color</th>
                    <th>Material</th>
                    <th>Unidades</th>
                    <th>Precio</th>
                    <th>Fotografía</th>

                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>1</td>
                    <td>SN_7821</td>
                    <td>Troncoso</td>
                    <td>16062023</td>
                    <td>Cafe ocre</td>
                    <td>Porcelanico</td>
                    <td>23</td>
                    <td>20853</td>
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