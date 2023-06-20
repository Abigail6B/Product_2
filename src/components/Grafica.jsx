import React from 'react'
import '../../public/plugins/jquery/jquery'

function Grafica() {
    const estilos = {

        height: "50px",
    }
    const estilos2 = {

        height: "400px",
        weight: "400px"
    }

    const estilos3 = {
        marginTop: "-10%"
    }
    return (
        <>
            <div className="row content-wrapper col-12 col-md-9 " style={estilos3}>
                <div class="card card-primary col-6" style={estilos2}>
                    <div class="card-header">
                        <h3 class="card-title">Donut Chart</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <canvas id="donutChart" style={estilos}></canvas>
                    </div>
                </div>
                {/* <!-- PIE CHART --> */}
                <div class="card card-primary col-6" style={estilos2}>
                    <div class="card-header">
                        <h3 class="card-title">Pie Chart</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <canvas id="pieChart" style={estilos}></canvas>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Grafica