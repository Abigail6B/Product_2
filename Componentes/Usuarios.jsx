import React from 'react'

const Usuarios = () => {
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
            <div className='md-8'>
            <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                <div className="col-sm-6">
                    <h1>Usuarios</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Usuarios</li>
                    </ol>
                </div>
                </div>
            </div>
            </div>

          
            <div className="card ">
                <div className="card-header" style={azul}>
                <h3 className="card-title">Registro de Usuarios</h3>

                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus" style={iconN}></i>
                    </button>
                </div>
                </div>
                <div className="card-body" style={rosa}>
                    <div className="row">
                            <div className="col-4">
                                <div className='form-group'>
                                    <label htmlFor="">Clave del empleado </label>
                                    <input  className="form-control" type="text" id='clave_emp' name='clave_emp' placeholder='Escribe aqui' />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='form-group'>
                                    <label htmlFor="">Puesto</label>
                                    <select name="cpuesto" id="puesto" className="form-control">
                                        <option value="">-Seleccione</option>
                                        <option value="Recamaras">Gerente</option>
                                        <option value="Oficina">Emppleado de mostrador</option>
                                        <option value="Sala">Lider</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='form-group'>
                                    <label htmlFor="">Fecha de alta</label>
                                    <input  className="form-control" type="date" id='fecha' name='fecha' />
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className='form-group'>
                                <label htmlFor="">Nombre del Empleado</label>
                                <input  className="form-control" type="text" id='nombre' name='nombre' placeholder='Escribe aqui' />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='form-group'>
                                <label htmlFor="">Apellido Paterno</label>
                                <input  className="form-control" type="text" id='a_paterno' name='a_paterno' placeholder='Escribe aqui' />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='form-group'>
                                <label htmlFor="">Apellido Materno</label>
                                <input  className="form-control" type="text" id='a_materno' name='a_materno' placeholder='Negro' />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className='form-group'>
                                <label htmlFor="">Usuario</label>
                                <input  className="form-control" type="text" id='user' name='user' placeholder='Escribe aqui' />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='form-group'>
                                <label htmlFor="">Contraseña</label>
                                <input  className="form-control" type="text" id='password' name='password' placeholder='Escribe aqui' />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="">Fotografía</label>
                                <input type="file" className='form-control' id='foto' name='foto'/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="card-footer">
                    <button className="btn submited float-right" style={azul}>Aceptar</button>
                </div>
            </div>
            

<div>
        <table className="table table-bordered table-striped table-hover" id='table_User'>
            <thead style={azul}>
                <tr>
                    <th>No.</th>
                    <th>Clave</th>
                    <th>Puesto</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Contraseña</th>
                    <th>Fotografía</th>
                    <th>Fecha</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody style={rosa}>
                <tr>
                     <td>1</td>
                     <td>UTP0144685</td>
                     <td>Gerente</td>
                     <td>Fatima Ortega</td>
                     <td>OrtegaF</td>
                     <td>1111</td>
                     <td>x</td>
                     <td>17-08-2020</td>
                     <td>
                     <i className="fas fa-trash-alt " alt="bote de basura" style={icon}></i>
                     <i className="fas fa-pen" style={icon}></i>
                     </td>
                </tr>
            </tbody>
            <tfoot>
                       
                        </tfoot>
        </table>
    </div>
            </div>
            </div>
        </>
    )
}

export default Usuarios