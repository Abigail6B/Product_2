import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Productos_update = () => {

    //Declaracion de variables de estado para cada uno de los campos de la tabla de  Productos  en base de datos
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
    
    //Utilizamos params ya que nos permite acceder desde un componente a los parámetros de la ruta
    const params = useParams();

    //Metodo para actualizar un productos
    const handleUp = () =>{
      //Formato de importacion JavaScript-Fetch que nos arroja postman y se asignan las variables de estado
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "cod_producto": cod_producto,
        "id_categoria": id_categoria,
        "marca": marca,
        "nombre_producto": nombre_producto,
        "n_piezas": n_piezas,
        "color": color,
        "material": material,
        "unidades": unidades,
        "dim_alto": dim_alto,
        "dim_ancho": dim_ancho,
        "dim_largo": dim_largo,
        "precio": precio,
        "descripcion": descripcion,
        "fecha_alta": fecha_alta,
        "fotografia": fotografia
        });

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`http://localhost/prueba_1/index.php/Api/PRODUCTOS/${params.id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    //Declaracion de variable de estado para mostrar los productos que se encuentran en la base de datos
    let [data, setData] = useState([])
    //Metodo ShowProduct nos ayuda a traer todas los productos registrados en la base de datos (GET)
    //Api GET
    const showProduct = () =>{
        fetch(`http://localhost/prueba_1/index.php/Api/PRODUCTOS/${params.id}`)
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.log('error', error));
    }

    //UseEffect para que nos muestre los Productos
    useEffect(() => {
      showProduct();
    }, [])
    
    

    /* estilos para el frontend */
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
  {/* Creacion de formulario para actualizar un producto  */}
<section className="content">
    <p className=" rounded pl-1 pr-1"><strong>Instrucciones:</strong> Lee cuidadosamente cada uno de los datos que se te piden. <strong >(1) En la parte izquierda podras observar lo que contiene el producto seleccionado</strong>, <strong >(2) y en la parte derecha deberas de llenar cada uno de los recuadros los datos que vas a actualizar</strong>, <strong >(3) si solamente vas a actualizar un solo dato, por favor repite la informacion en los recuadros de la derecha</strong>.</p>
        <div className="card ">
            <div className="card-header" style={cafe}>
                <h3 className="card-title" style={letras}><i className="fas fa-plus-square" style={letras}></i>Registro de Productos</h3>
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus" style={iconN}></i>
                    </button>
                </div>
            </div>
            {/* Se llama OnChange para que se tomen los valores que se estan obteniendo de los input y se utiliza los set, ademas se coloca del lado dreceho los datos que se encuentran actualemnte en base de datos */}
                <div className="card-body" style={amarillo}>
                    <div className="row">
                            <div className="col">
                                <div className='form-group'>
                                    <label >Código del Producto</label>
                                    <input  className="form-control" disabled="true" type="text" id='cod_prod' name='cod_prod' value={data.cod_producto}/>
                                </div>
                            </div>
                            <div className="col">
                                <div className='form-group'>
                                    <label >Código del Producto</label>
                                    <input  className="form-control" type="text" id='cod_prod' name='cod_prod' placeholder='Escribe aqui' valor={cod_producto} onChange={event => setCod_producto(event.target.value)}/>
                                </div>
                            </div>
                    </div>
                    <div className="row">
                            <div className="col">
                                <div className='form-group'>
                                    <label >Código de Categoria</label>
                                    <input  className="form-control" disabled="true" type="text" id='cod_cate' name='cod_cate' value={data.id_categoria}/>
                                </div>
                            </div>
                            <div className="col">
                                <div className='form-group'>
                                    <label >Código de Categoria</label>
                                    <input  className="form-control" type="text" id='cod_cate' name='cod_cate' placeholder='Escribe aqui' valor={id_categoria} onChange={event => setId_categoria(event.target.value)}/>
                                </div>
                            </div>
                    </div>
                    <div className="row">
                            <div className="col">
                                <div className='form-group'>
                                    <label >Marca</label>
                                    <input  className="form-control" disabled="true" type="text" id='marca' name='marca' placeholder='Escribe aqui' value={data.marca} />
                                </div>
                            </div>
                            <div className="col">
                                <div className='form-group'>
                                    <label >Marca</label>
                                    <input  className="form-control" type="text" id='marca' name='marca' placeholder='Escribe aqui' valor={marca} onChange={event => setMarca(event.target.value)} />
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className='form-group'>
                                <label >Nombre del Producto</label>
                                <input  className="form-control" disabled="true" type="text" id='name_prod' name='name_prod' value={data.nombre_producto} />
                            </div>
                        </div>
                        <div className="col">
                            <div className='form-group'>
                                <label >Nombre del Producto</label>
                                <input  className="form-control" type="text" id='name_prod' name='name_prod' placeholder='Escribe aqui' valor={nombre_producto} onChange={event => setNombre_producto(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <div className='form-group'>
                                <label  >No. Piezas</label>
                                <input  className="form-control" disabled="true" type="number" id='n_pza' name='n_pza' placeholder='0' value={data.n_piezas}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className='form-group'>
                                <label  >No. Piezas</label>
                                <input  className="form-control" type="number" id='n_pza' name='n_pza' placeholder='0' valor={n_piezas} onChange={event => setN_piezas(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className='form-group'>
                                <label >Color</label>
                                <input  className="form-control" disabled="true" type="text" id='color' name='color' placeholder='Negro' value={data.color}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className='form-group'>
                                <label >Color</label>
                                <input  className="form-control" type="text" id='color' name='color' placeholder='Negro' valor={color} onChange={event => setColor(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className='form-group'>
                                <label >Material</label>
                                <input  className="form-control" disabled="true" type="text" id='material' name='material' value={data.material} />
                            </div>
                        </div>
                        <div className="col">
                            <div className='form-group'>
                                <label >Material</label>
                                <input  className="form-control" type="text" id='material' name='material' placeholder='Escribe aqui' valor={material} onChange={event => setMaterial(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <div className='form-group'>
                                <label  >Unidades</label>
                                <input  className="form-control" disabled="true" type="number" id='unidades' name='unidades' placeholder='0' value={data.unidades} />
                            </div>
                        </div>
                        <div className="col">
                            <div className='form-group'>
                                <label  >Unidades</label>
                                <input  className="form-control" type="number" id='unidades' name='unidades' placeholder='0' valor={unidades} onChange={event => setUnidades(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <div className='form-group'>
                                <label  >Dimensiones (cm)</label>
                                <div className="row">
                                    <div className="col">
                                    <input  className="form-control" disabled="true" type="number" id='alto' name='alto'  value={data.dim_alto}/>
                                    </div>
                                    <div className="col">
                                    <input  className="form-control" disabled="true" type="number" id='ancho' name='ancho' value={data.dim_ancho}/>
                                    </div>
                                    <div className="col">
                                    <input  className="form-control" disabled="true" type="number" id='largo' name='largo' value={data.dim_largo} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className='form-group'>
                                <label  >Dimensiones (cm)</label>
                                <div className="row">
                                    <div className="col">
                                    <input  className="form-control" type="number" id='alto' name='alto' placeholder='Alto' valor={dim_alto} onChange={event => setDim_alto(event.target.value)} />
                                    </div>
                                    <div className="col">
                                    <input  className="form-control" type="number" id='ancho' name='ancho' placeholder='Ancho' valor={dim_ancho} onChange={event => setDim_ancho(event.target.value)} />
                                    </div>
                                    <div className="col">
                                    <input  className="form-control" type="number" id='largo' name='largo' placeholder='Largo' valor={dim_largo} onChange={event => setDim_largo(event.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                      <div className="row">
                      <div className="col">
                            <div className='form-group'>
                                <label  >Costos</label>
                                <input  className="form-control" disabled="true" type="number" id='precio' name='precio' value={data.precio}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className='form-group'>
                                <label  >Costos</label>
                                <input  className="form-control" type="number" id='precio' name='precio' placeholder='$$$' valor={precio} onChange={event => setPrecio(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <div className='form-group'>
                                <label >Descripción</label>
                                <input  className="form-control" disabled="true" type="text" id='descripcion' name='descripcion'value={data.descripcion}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className='form-group'>
                                <label >Descripción</label>
                                <input  className="form-control" type="text" id='descripcion' name='descripcion' placeholder='Escribe aqui' valor={descripcion} onChange={event => setDescripcion(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <div className="form-group">
                                <label  >Fecha de alta</label>
                                <input type="date" className='form-control' disabled="true" id='fecha' name='fecha' value={data.fecha_alta} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label  >Fecha de alta</label>
                                <input type="date" className='form-control' id='fecha' name='fecha' valor={fecha_alta} onChange={event => setFecha_alta(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="col">
                            <div className="form-group">
                                <label  >Fotografía</label>
                                <input type="file" className='form-control' id='foto' name='foto' valor={fotografia} onChange={event => setFotografia(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Regresa a productos */}
                <div className="card-footer">
                    <Link to='/Productos' className="btn btn-secondary">
                        Regresar
                    </Link>
                    {/* llamada del metodo handleUp con el evento onClick esto para mandar a base de datos la actualizacion de un producto*/}
                    <button className="btn submited float-right" style={cafe}><b style={letras} onClick={()=>handleUp()}> Aceptar </b></button>
                </div>
            </div>
 <div>
    </div>
    </section>
              </div>
    </>
  )
}
