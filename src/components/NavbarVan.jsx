import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavbarVan() {
    return (
        <header className=" flex justify-between items-center h-20 px-6 md:px-10 bg-[#db7f0e]">
          
            <Link to='/' className="font-black text-2xl uppercase tracking-tighter">
                #VANLIFE
            </Link>

           
            <nav className="flex items-center space-x-4 md:space-x-8 font-medium text-[#f1eeee]">
                <NavLink 
                    to="/host" 
                    className={({isActive}) => isActive ? "text-black underline font-bold" : "hover:text-black hover:underline"}
                >
                    Host
                </NavLink>
                
                <NavLink 
                    to="/about" 
                    className={({isActive}) => isActive ? "text-black underline font-bold" : "hover:text-black hover:underline"}
                >
                    About
                </NavLink>
                
                <NavLink 
                    to="/vans" 
                    className={({isActive}) => isActive ? "text-black underline font-bold" : "hover:text-black hover:underline"}
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    )
}

export default NavbarVan