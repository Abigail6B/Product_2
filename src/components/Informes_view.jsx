import React from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import Informes from './Informes'
import Grafica from './Grafica'

const Informes_view = () => {
    return (
        <>
            <Navbar />
            <Sidebar/>
            <div className='row col-12 justify-content-center'>
                <Informes/>
                <Grafica/>
            </div>
            <Footer/>
        </>
    )
}

export default Informes_view;
