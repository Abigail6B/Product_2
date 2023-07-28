import React from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import Informes from './Informes'

const Informes_view = () => {
    return (
        <>
            <Navbar />
            <Sidebar/>
            <Informes/>
            <Footer/>
        </>
    )
}

export default Informes_view;
