import React from 'react'
import { Link } from 'react-router-dom'

function NavbarVan() {
    return (
    <div className="flex justify-between items-center h-20 px-10 bg-amber-500">
        <h1 className="font-bold text-xl">#VANLIFE</h1>
        <div>
        <Link to="about">About</Link>
        <Link to="vans" className="px-5">Vans</Link>
        </div>
    </div>
    )

}

export default NavbarVan