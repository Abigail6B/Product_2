import React from 'react'
import { Navbar } from './Navbar'
import { Aside } from './Aside'
import { Footer } from './Footer'
import Home from '../src/components/Home'

export default function Home_view() {
    return (
        <>
            <Navbar />
            <Aside />
            <Home />
            <Footer />
        </>
    )
}
