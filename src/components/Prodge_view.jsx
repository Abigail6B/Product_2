import React from 'react'

import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'
import Productos_geren from './Productos_geren'

function Prodge_view() {
    return (
        <>
            <Navbar />

            <Sidebar />
            <Productos_geren />
            <Footer />
        </>
    )
}

export default Prodge_view