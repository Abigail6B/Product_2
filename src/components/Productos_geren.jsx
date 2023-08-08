import React, { useEffect, useState } from 'react'


function Productos_geren() {

  //Declaracion de variable de estado para mostrar los productos
  const [data, setData] = useState([]);    

  //Metodo ShowProd nos ayuda a traer todas los productos registrados en la base de datos (GET)
    //Api GET
  const showProd = () =>{
    fetch("http://localhost/prueba_1/index.php/Api/PRODUCTOS")
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.log('error', error));
  }

  //UseEffect para que nos muestre los productos
  useEffect(() => {
    showProd();
  }, [])
  
  
    
        
    
    
/* Estilos para el frontend de categorias  */
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
 {/* incio de la creacion de tabla  */}
        <section className="content">
          <div className="card">
            <div className="card-body card-info">
              <table className="table table-bordered" id="table_prodg">
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
                    

                  </tr>
                </thead>
                {/* uso del state “data” que es el que contiene todos los registros, ya que es un arreglo, se utiliza el método “map” para poder acceder a cada registro y poder imprimir en pantalla los datos.  */}
                <tbody style={amarillo}>
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
                </tr>
                ))}

                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <script src="./public/dist/js/productos_g.js"></script>

    </>
  )
}

export default Productos_geren