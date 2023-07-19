import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar/Navbar'


const Main = () => {
    return (
        <div className='h-screen'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer />
        </div>
    )
}

export default Main
