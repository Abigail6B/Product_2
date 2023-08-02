import React from 'react'

const Productos = () =>{
    const amarillo={
        background:'#ffde59'
      }
    const cafe={
        background:'#8e582c'
    }
    const icon={
        color:'#8e582c'
    }
    const iconN={
        color:'#000'
    }
    const letras={
        color:'#FFFF'
    }
    return (
        <>
<div className='content-wrapper '>
  <section className="content-header">
             <div className="container-fluid">
                <div className="row mb-2">
                <div className="col-sm-6">
                    <h1>Productos</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Productos</li>
                    </ol>
                 </div>
                 </div>
                </div>
  </section>
<section className="content">
        <div className="card ">
            <div className="card-header" style={cafe}>
                <h3 className="card-title" style={letras}><i className="fas fa-plus-square" style={letras}></i>Registro de Productos</h3>
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus" style={iconN}></i>
                    </button>
                </div>
            </div>
                <div className="card-body" style={amarillo}>
                    <div className="row">
                            <div className="col-4">
                                <div className='form-group'>
                                    <label >Código del Producto</label>
                                    <input  className="form-control" type="text" id='cod_prod' name='cod_prod' placeholder='Escribe aqui' />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='form-group'>
                                    <label >Código de Categoria</label>
                                    <select name="categorias" id="categorias" className="form-control">
                                        <option value="">-Seleccione</option>
                                        <option value="Recamaras">Recamaras</option>
                                        <option value="Oficina">Oficina</option>
                                        <option value="Sala">Sala</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='form-group'>
                                    <label >Marca</label>
                                    <input  className="form-control" type="text" id='marca' name='marca' placeholder='Escribe aqui' />
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className='form-group'>
                                <label >Nombre del Producto</label>
                                <input  className="form-control" type="text" id='name_prod' name='name_prod' placeholder='Escribe aqui' />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='form-group'>
                                <label  >No. Piezas</label>
                                <input  className="form-control" type="number" id='n_pza' name='n_pza' placeholder='0' />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='form-group'>
                                <label >Color</label>
                                <input  className="form-control" type="text" id='color' name='color' placeholder='Negro' />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className='form-group'>
                                <label >Material</label>
                                <input  className="form-control" type="text" id='material' name='material' placeholder='Escribe aqui' />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='form-group'>
                                <label  >Unidades</label>
                                <input  className="form-control" type="number" id='unidades' name='unidades' placeholder='0' />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='form-group'>
                                <label  >Dimensiones (cm)</label>
                                <div className="row">
                                    <div className="col-4">
                                    <input  className="form-control" type="number" id='alto' name='alto' placeholder='Alto' />
                                    </div>
                                    <div className="col-4">
                                    <input  className="form-control" type="number" id='ancho' name='ancho' placeholder='Ancho' />
                                    </div>
                                    <div className="col-4">
                                    <input  className="form-control" type="number" id='largo' name='largo' placeholder='Largo' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                      <div className="row">
                        <div className="col-4">
                            <div className='form-group'>
                                <label  >Costos</label>
                                <input  className="form-control" type="number" id='precio' name='precio' placeholder='$$$' />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='form-group'>
                                <label >Descripción</label>
                                <input  className="form-control" type="text" id='descripcion' name='descripcion' placeholder='Escribe aqui' />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label  >Fecha de alta</label>
                                <input type="date" className='form-control' id='fecha' name='fecha' />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label  >Fotografía</label>
                            <input type="file" className='form-control' id='foto' name='foto'/>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn submited float-right" style={cafe}><b style={letras}> Aceptar</b></button>
                </div>
            </div>
 <div>
  <table className="table table-bordered table-striped table-hover" id='table_Prod'>
            <thead style={cafe}>
                <tr style={letras}>
                    <th>No.</th>
                    <th>Código</th>
                    <th>Marca</th>
                    <th>Nombre</th>
                    <th>No. pza</th>
                    <th>Color</th>
                    <th>Material</th>
                    <th>Unidades</th>
                    <th>Dimensiones</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Fecha de alta</th>
                    <th>Fotografía</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody style={amarillo}>
                <tr>
                     <td>1</td>
                     <td>CHAIR2</td>
                     <td>Chair</td>
                     <td>Silla</td>
                     <td>2</td>
                     <td>Negra</td>
                     <td>Plastico</td>
                     <td>4</td>
                     <td>10, 20, 45</td>
                     <td>350</td>
                     <td>Silla con respaldo de felpa</td>
                     <td>14-06-2023</td>
                     <td>x</td>
                     <td>
                     <i className="fas fa-trash-alt " alt="bote de basura" style={icon}></i>
                     <i className="fas fa-pen" style={icon}></i>
                     </td>
                </tr>
            </tbody>
        </table>
    </div>
    </section>
              </div>
   
    
        </>
    )
}

export default Productos