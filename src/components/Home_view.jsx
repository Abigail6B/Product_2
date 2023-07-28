import React from 'react'
<<<<<<< HEAD
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import Home from './Home'
import { Sidebar } from './Sidebar'

export default function Home_view() {
    return (
        <>
            <Navbar />
            <Sidebar/>
            <div className='col-12'>
                <Home />
            </div>
            <Footer />

        </>
    )
}
=======
import Home from './Home';


const Home_view = () => {
  return (
    <>
        <Home />
    </>
  )
}

export default Home_view;
>>>>>>> Abigail
