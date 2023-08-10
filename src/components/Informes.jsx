import { CategoryScale, Chart } from 'chart.js/auto';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'



const Informes = () => {
    
     //Declaracion de variables de estado para cada uno de los campos de la tabla de producros en base de datos
    const [producto, setProducto] = useState([])
    const [piezas, setPiezas] = useState([])

    const [producto_men, setProducto_men] = useState([])
    const [piezas_men, setPiezas_men] = useState([])
    
    /* Se empieza a contrir el grafico con el data, se le da color y los atributos que va a llevar */
    const data ={
        labels : producto,
        datasets:[{
            label: 'numero de piezas: ',
            backgroundColor: 'rgba(0,255,0,0,1)',
            boderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,255,0,0.2)',
            hoverBorderColor : '#FFFF00',
            data: piezas
        }]
        
    };

    /* Adsignacion de si es responsive, etc */
    const opciones ={
        maintainAspectRatio: false,
        responsive: true
    }

   
    /* Metodo para mostrar todos los productos junto con su numero de piezas mayor*/
    const showProduct = () =>{
        fetch("http://localhost/prueba_1/index.php/Api/PRODUCTOS")
        .then(response => response.json())
        .then(result =>{ var respuesta =result
            //console.log(respuesta);
            var resp = respuesta.sort((x, y) => x.n_piezas - y.n_piezas)
            var mayor = resp.slice(-5).reverse();
            var auxPiezas = [], auxProducto = [], auxFecha = [];
            mayor.map(elemento=>{
                auxPiezas.push(elemento.n_piezas);
                auxProducto.push(elemento.nombre_producto);
            });
            setPiezas(auxPiezas);
            setProducto(auxProducto);
            
        })

    }


    const data_men ={
        labels : producto_men,
        datasets:[{
            label: 'numero de piezas: ',
            backgroundColor: 'rgba(0,255,0,0,1)',
            boderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,255,0,0.2)',
            hoverBorderColor : '#FFFF00',
            data: piezas_men
        }]
    };

     /* Metodo para mostrar todos los productos junto con su numero de piezas menores */
     const showProduct_men = () =>{
        
        fetch("http://localhost/prueba_1/index.php/Api/PRODUCTOS")
        .then(response => response.json())
        .then(result =>{ var respuesta =result
            var resp = respuesta.sort((x, y) => x.n_piezas - y.n_piezas)
            //console.log(resp);
            var auxPiezas = [], auxProducto = [];
            resp.map(elemento=>{
                auxPiezas.push(elemento.n_piezas);
                auxProducto.push(elemento.nombre_producto);
            });
            setPiezas_men(auxPiezas);
            setProducto_men(auxProducto);
            
        })

    }

    /* Nos ayuda a traer los datos de productos */
    useEffect(() => {
      showProduct();
      showProduct_men();
    }, [])
    

    
  
        
/* Estilos para el frontend */
    const amarillo={
        background:'#ffde59'
      }
    const cafe={
        background:'#8e582c'
    }
    const icon = {
        color: '#83C5BE'
    }
    const iconN = {
        color: '#000'
    }
    const estilos = {

        height: "50px",
    }
    const letras={
        color:'#FFFF'
    }

    return (
        <> 
            <div className='content-wrapper'>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Número de piezas en los productos</h1>
                             </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Informes</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Creacion de grafica mediante la etiqueta bar */}
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <div className="container">
                                <div className="card card-success">
                                    <div className="card-header" style={cafe}>
                                        <h3 className="card-title" style={letras}> <b>Productos con mayor numero de piezas</b></h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Bar data={data} options={opciones}></Bar>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="container">
                                <div className="card card-success">
                                    <div className="card-header" style={cafe}>
                                        <h3 className="card-title" style={letras}> <b>Productos con menor numero de piezas</b></h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Bar data={data_men} options={opciones}></Bar>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
  
                

                
            
        </>
    )
}

export default Informes