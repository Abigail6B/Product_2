import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import Informes from './Informes'
import { Sidebar} from './Sidebar'


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
