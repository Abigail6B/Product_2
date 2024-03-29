/* Importacion de librerias o elementos de react */
import React, { useState } from 'react'
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom'

const Productos = () =>{
    //Declaracion de variables de estado para cada uno de los campos de la tabla de Productos en base de datos
    const [cod_producto, setCod_producto] = useState('');
    const [id_categoria, setId_categoria] = useState(0);
    const [marca, setMarca] = useState('');
    const [nombre_producto, setNombre_producto] = useState('');
    const [n_piezas, setN_piezas] = useState(0);
    const [color, setColor] = useState('');
    const [material, setMaterial] = useState('');
    const [unidades, setUnidades] = useState(0);
    const [dim_alto, setDim_alto] = useState(0);
    const [dim_ancho, setDim_ancho] = useState(0);
    const [dim_largo, setDim_largo] = useState(0);
    const [precio, setPrecio] = useState(0);
    const [descripcion, setDescripcion] = useState('');
    const [fecha_alta, setFecha_alta] = useState('2023-08-03 10:00:00');
    const [fotografia, setFotografia] = useState('');

    //Declaracion de variable de estado para mostrar los productos que se encuentran en la base de datos
    const [data, setData] = useState([])

    //Metodo HandleAdd este nos sirve para dar de alta productos nuevos
    const handleAdd = () =>{
        //Formato de importacion JavaScript-Fetch que nos arroja postman y se asignan las variables de estado
        var formdata = new FormData();
        formdata.append("cod_producto", cod_producto);
        formdata.append("id_categoria", id_categoria);
        formdata.append("marca", marca);
        formdata.append("nombre_producto", nombre_producto);
        formdata.append("n_piezas", n_piezas);
        formdata.append("color", color);
        formdata.append("material", material);
        formdata.append("unidades", unidades);
        formdata.append("dim_alto", dim_alto);
        formdata.append("dim_ancho", dim_ancho);
        formdata.append("dim_largo", dim_largo);
        formdata.append("precio", precio);
        formdata.append("descripcion", descripcion);
        formdata.append("fecha_alta", fecha_alta);
        formdata.append("fotografia", fotografia);

        var requestOptions = {
        header: {
            'Content-Type': "application/json, charset=UTF-8"
        },
        method: 'POST',
        body: formdata
        };
        //API POST
        fetch("http://localhost/prueba_1/index.php/Api/PRODUCTOS/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    //Metodo ShowData nos ayuda a traer todos los productos registrados en la base de datos (GET)
    //Api GET
    const showData =  () =>{
        fetch("http://localhost/prueba_1/index.php/Api/PRODUCTOS")
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.log('error', error));
    }
    
        
    //Metodo handleDelete nos ayuda a eliminar un producto de la base de datos con un id especifico (DELETE)
    //Api DELETE
    const handleDelete = (id_producto) =>{
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch(`http://localhost/prueba_1/index.php/Api/PRODUCTOS/${id_producto}`, 
        requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    //UseEffect para que nos muestre los productos
    useEffect(() => {
      showData()
    }, [])
    
   const columns = [
    {
        name: 'id_producto',
        selector: row => row.id_producto
    },
    {
        name: 'cod_producto',
        selector: row => row.cod_producto
    },
    {
        name: 'marca',
        selector: row => row.marca
    },
    {
        name: 'nombre_producto',
        selector: row => row.nombre_producto
    },
    {
        name: 'n_piezas',
        selector: row => row.n_piezas
    },
    {
        name: 'color',
        selector: row => row.color
    },
    {
        name: 'material',
        selector: row => row.material
    },
    {
        name: 'unidades',
        selector: row => row.unidades
    },
    {
        name: 'dim_alto',
        selector: row => row.dim_alto
    },
    {
        name: 'dim_ancho',
        selector: row => row.dim_ancho
    },
    {
        name: 'dim_largo',
        selector: row => row.dim_largo
    },
    {
        name: 'precio',
        selector: row => row.precio
    },
    {
        name: 'descripcion',
        selector: row => row.descripcion
    },
    {
        name: 'fecha_alta',
        selector: row => row.fecha_alta
    },
    {
        name: 'fotografia',
        selector: row => row.fotografia
    },
   ]

   //Estilos de la vista (se basa en colores)
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
  {/* Creacion de formulario para insertar un nuevo producto  */}
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
            {/* Se llama OnChange para que se tomen los valores que se estan obteniendo de los input y se utiliza los set  */}
                <div className="card-body" style={amarillo}>
                    <div className="row">
                            <div className="col-4">
                                <div className='form-group'>
                                    <label >Código del Producto</label>
                                    <input  className="form-control" type="text" id='cod_prod' name='cod_prod' placeholder='Escribe aqui' valor={cod_producto} onChange={event => setCod_producto(event.target.value)}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='form-group'>
                                    <label >Código de Categoria</label>
                                    <input  className="form-control" type="text" id='cod_cate' name='cod_cate' placeholder='Escribe aqui' valor={id_categoria} onChange={event => setId_categoria(event.target.value)}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='form-group'>
                                    <label >Marca</label>
                                    <input  className="form-control" type="text" id='marca' name='marca' placeholder='Escribe aqui' valor={marca} onChange={event => setMarca(event.target.value)} />
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className='form-group'>
                                <label >Nombre del Producto</label>
                                <input  className="form-control" type="text" id='name_prod' name='name_prod' placeholder='Escribe aqui' valor={nombre_producto} onChange={event => setNombre_producto(event.target.value)} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='form-group'>
                                <label  >No. Piezas</label>
                                <input  className="form-control" type="number" id='n_pza' name='n_pza' placeholder='0' valor={n_piezas} onChange={event => setN_piezas(event.target.value)} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='form-group'>
                                <label >Color</label>
                                <input  className="form-control" type="text" id='color' name='color' placeholder='Negro' valor={color} onChange={event => setColor(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className='form-group'>
                                <label >Material</label>
                                <input  className="form-control" type="text" id='material' name='material' placeholder='Escribe aqui' valor={material} onChange={event => setMaterial(event.target.value)} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='form-group'>
                                <label  >Unidades</label>
                                <input  className="form-control" type="number" id='unidades' name='unidades' placeholder='0' valor={unidades} onChange={event => setUnidades(event.target.value)} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='form-group'>
                                <label  >Dimensiones (cm)</label>
                                <div className="row">
                                    <div className="col-4">
                                    <input  className="form-control" type="number" id='alto' name='alto' placeholder='Alto' valor={dim_alto} onChange={event => setDim_alto(event.target.value)} />
                                    </div>
                                    <div className="col-4">
                                    <input  className="form-control" type="number" id='ancho' name='ancho' placeholder='Ancho' valor={dim_ancho} onChange={event => setDim_ancho(event.target.value)} />
                                    </div>
                                    <div className="col-4">
                                    <input  className="form-control" type="number" id='largo' name='largo' placeholder='Largo' valor={dim_largo} onChange={event => setDim_largo(event.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                      <div className="row">
                        <div className="col-4">
                            <div className='form-group'>
                                <label  >Costos</label>
                                <input  className="form-control" type="number" id='precio' name='precio' placeholder='$$$' valor={precio} onChange={event => setPrecio(event.target.value)}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='form-group'>
                                <label >Descripción</label>
                                <input  className="form-control" type="text" id='descripcion' name='descripcion' placeholder='Escribe aqui' valor={descripcion} onChange={event => setDescripcion(event.target.value)}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label  >Fecha de alta</label>
                                <input type="date" className='form-control' id='fecha' name='fecha' valor={fecha_alta} onChange={event => setFecha_alta(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label  >Fotografía</label>
                            <input type="file" className='form-control' id='foto' name='foto' valor={fotografia} onChange={event => setFotografia(event.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <Link to='/Home' className="btn btn-secondary">
                        Cancelar
                    </Link>
                    {/* llamada del metodo handleAdd con el evento onClick esto para mandar a base de datos el registro de un producto mediante la api */}
                    <button className="btn submited float-right" style={cafe}><b style={letras} onClick={()=>handleAdd()}> Aceptar </b></button>
                </div>
            </div>
 <div>
    {/* fin del formuario */}
    {/* incio de la creacion de tabla  */}
        <table className="table table-bordered table-striped table-hover" id='table_Prod'>
                    <thead style={cafe}>
                    <tr>
                            <th style={letras}>No.</th>
                            <th style={letras}>Código poroducto</th>
                            <th style={letras}>Código categoria</th>
                            <th style={letras}>Marca</th>
                            <th style={letras}>Nombre del producto</th>
                            <th style={letras}>No.Pza</th>
                            <th style={letras}>Color</th>
                            <th style={letras}>Material</th>
                            <th style={letras}>Unidades</th>
                            <th style={letras}>Alto</th>
                            <th style={letras}>Ancho</th>
                            <th style={letras}>Largo</th>
                            <th style={letras}>Precio</th>
                            <th style={letras}>Descripcion</th>
                            <th style={letras}>Fecha</th>
                            <th style={letras}>Fotografía</th>
                            <th style={letras}>Opciones</th>

                        </tr>
                        </thead>
                        <tbody style={amarillo}>
                            
                        {/* uso del state “data” que es el que contiene todos los registros, ya que es un arreglo, se utiliza el método “map” para poder acceder a cada registro y poder imprimir en pantalla los datos.  */}
                        {data.map((productos) => (
                        <tr key={productos.id_producto}>
                            <td>{productos.id_producto}</td>
                            <td>{productos.cod_producto}</td>
                            <td>{productos.id_categoria}</td>
                            <td>{productos.marca}</td>
                            <td>{productos.nombre_producto}</td>
                            <td>{productos.n_piezas}</td>
                            <td>{productos.color}</td>
                            <td>{productos.material}</td>
                            <td>{productos.unidades}</td>
                            <td>{productos.dim_alto}</td>
                            <td>{productos.dim_ancho}</td>
                            <td>{productos.dim_largo}</td>
                            <td>{productos.precio}</td>
                            <td>{productos.descripcion}</td>
                            <td>{productos.fecha_alta}</td>
                            <td>{productos.fotografia}</td>
                            <td >
                                {/* Llamado al metodo handleDelte el cual nos ayuda a eliminar un producto existente median un id especifico */}
                                <button className='btn col-lg-4 offset-md-1' onClick={()=>handleDelete(productos.id_producto)}><i className="fas fa-trash-alt " alt="bote de basura" style={icon}></i></button>

                                {/* Se manda a traer una ruta a la cual se le pasa el id del producto seleccionado, al dar clic este redirige a una nueva vista que es de actualizar */}
                                <button className='btn col-lg-4 offset-md-1 '> <Link to={`/producto_actualizar/${productos.id_producto}`} className=""><i className="fas fa-pen" style={icon}></i></Link></button>
                                
                            
                            </td>
                        </tr>
                        ))}

                        </tbody>
        </table>
    </div>
    </section>
              </div>
   
    
        </>
    )
}

export default Productos