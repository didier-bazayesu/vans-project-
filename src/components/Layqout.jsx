import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarVan from './NavbarVan'
import Footer from './Footer'


function Layqout() {
  return (
   <div className="flex flex-col min-h-screen">
        <NavbarVan />
        <main className="grow">
            <Outlet />
        </main>
        <Footer />
   </div>
  )
}

export default Layqout