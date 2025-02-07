import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router'
import Footer from './footer'

function Layout() {
  return (
    <>
        <Navbar/>
        
        <div className='bg-[rgb(23,105,106)] h-[50px] w-full'>
          </div>
       
        <Outlet/>
        <Footer/>
    </>
    
  )
}

export default Layout