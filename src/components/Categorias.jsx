/* Importacion de librerias o elementos de react */
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Categorias = () => {
    //Declaracion de variables de estado para cada uno de los campos de la tabla de  Categorias en base de datos
    const [codigo, setCodigo] = useState('');
    const [tipo, setTipo] = useState('');
    const [fecha_alta, setFecha_alta] = useState('2023-08-03 10:00:00')

    //Metodo HandleAdd este nos sirve para dar de alta categorias nuevas
    const handleAdd = () =>{
      var formdata = new FormData();
      formdata.append("codigo", codigo);
      formdata.append("tipo", tipo);
      formdata.append("fecha_alta", fecha_alta);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      fetch("http://localhost/prueba_1/index.php/Api/CATEGORIA/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    //Declaracion de variable de estado para mostrar las catregorias que se encuentran en la base de datos
    const [data, setData] = useState([])

    //Metodo ShowCate nos ayuda a traer todas las categorias registrados en la base de datos (GET)
    //Api GET
    const showCate = () =>{
      fetch("http://localhost/prueba_1/index.php/Api/CATEGORIA")
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.log('error', error));
    }

    //UseEffect para que nos muestre las categorias
    useEffect(() => {
      showCate();
    }, [])
    
        
    //Metodo handleDelete nos ayuda a eliminar una categoria de la base de datos con un id especifico (DELETE)
    //Api DELETE
    const handleDelete = (id_categoria) =>{
      var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
            
      fetch(`http://localhost/prueba_1/index.php/Api/CATEGORIA/${id_categoria}`, 
      requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    
    /* Estilos de colores */
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
      {/* Inicio de contenido  */}
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
  {/* Creacion de formulario para insertar una categoria  */}
      <section className='content'>
       
      <div className="card ">
          <div className="card-header"style={cafe}>
            <h3 className="card-title" style={letras}><i className="fas fa-plus-square" style={letras}></i>Registro de Categorias</h3>
  
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                <i className="fas fa-minus" style={iconN}></i>
              </button>
            </div>
          </div>
          {/* Se llama OnChange para que se tomen los valores que se estan obteniendo de los input y se utiliza los set  */}
          <div className="card-body" style={amarillo}>
            <div className='form-group'>
                  <label htmlFor="">Código de Categoria</label>
                  <input  className="form-control" type="text" id='cod_cat' name='cod_cat' placeholder='Escribe aqui' valor={codigo} onChange={event => setCodigo(event.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="">Tipo</label>
              <input  className="form-control" type="text" id='tip' name='tip' placeholder='Escribe aqui' valor={tipo} onChange={event => setTipo(event.target.value)} />
            </div>
            <div className="form-group">
              <label  >Fecha de alta</label>
              <input type="date" className='form-control' id='fecha' name='fecha' valor={fecha_alta} onChange={event => setFecha_alta(event.target.value)} />
            </div>
          </div>
          <div className="card-footer">
            <Link to='/Home' className="btn btn-secondary">
              Cancelar
            </Link>
            {/* llamada del metodo handleAdd con el evento onClick esto para mandar a base de datos el registro de una categoriamediante la api */}
            <button className="btn submited float-right" style={cafe}><b style={letras} onClick={()=>handleAdd()}> Aceptar </b></button>
          </div>
        </div>
      </section>
       {/* fin del formuario */}
    {/* incio de la creacion de tabla  */}
      <section className='content'>
          <table className="table table-bordered table-striped table-hover" id='table_Cat'>
              <thead style={cafe}>
                  <tr style={letras}>
                      <th>No.</th>
                      <th>Código</th>
                      <th>Tipo</th>
                      <th>Fecha</th>
                      <th>Opciones</th>
                  </tr>
              </thead>
              <tbody style={amarillo}>
                {/* uso del state “data” que es el que contiene todos los registros, ya que es un arreglo, se utiliza el método “map” para poder acceder a cada registro y poder imprimir en pantalla los datos.  */}
                  {data.map((cate)=>(
                    <tr key={cate.id_categoria}>
                      <td>{cate.id_categoria}</td>
                      <td>{cate.codigo}</td>
                      <td>{cate.tipo}</td>
                      <td>{cate.fecha_alta}</td>
                      <td >
                        {/* Llamado al metodo handleDelte el cual nos ayuda a eliminar una categoria existente median un id especifico */}
                        <button className='btn col-lg-4 offset-md-1' onClick={()=>handleDelete(cate.id_categoria)}><i className="fas fa-trash-alt " alt="bote de basura" style={icon}></i></button>
                        
                        {/* Se manda a traer una ruta a la cual se le pasa el id de la categoria seleccionada, al dar clic este redirige a una nueva vista que es de actualizar */}
                        <button className='btn col-lg-4 offset-md-1 '> <Link to={`/categoria_actualizar/${cate.id_categoria}`} className=""><i className="fas fa-pen" style={icon}></i></Link></button>
                      </td>
                    </tr>
                  ))}
              </tbody>
              <tfoot>
                          </tfoot>
          </table>
      </section>
      </div>
      </>
    )
  }
  

export default Categorias;//se exporta para  poder utilizarlo en otros componentes