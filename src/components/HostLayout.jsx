import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function HostLayout() {
  return (
    <div className="p-6"> 
      <nav className='space-x-10 mb-8'>
          <NavLink to=''className={({isActive}) => isActive ? "text-blue-700 text-shadow-blue-300 underline" : null } end >Dashboard</NavLink>
          <NavLink to='income' className={({isActive}) => isActive ? "text-blue-700 text-shadow-blue-300 underline" : null }>Income</NavLink>
          <NavLink to='vans' className={({isActive}) => isActive ? "text-blue-700 text-shadow-blue-300 underline" : null }>Vans</NavLink>
          <NavLink to='reviews' className={({isActive}) => isActive ? "text-blue-700 text-shadow-blue-300 underline" : null }>Reviews</NavLink>
      </nav>
      
      
      <Outlet />
    </div>
  )
}

export default HostLayout