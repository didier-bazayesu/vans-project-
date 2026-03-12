import React, { useEffect, useState } from 'react'
import {  useParams,Link, Outlet ,NavLink,useLoaderData} from 'react-router-dom'
import {getHostVans} from '../mirageLibrary/API';


export function loader ({params}){
        console.log(params)
        return getHostVans(params.id);
}

function HostVansDetails() {  
   const  currentVan = useLoaderData();
  return (
    <>

        <Link 
          to=".." 
          relative="path"
          className="text-gray-500 hover:text-black transition-colors mb-8 inline-block"
        >
          &larr; <span className="underline decoration-1 underline-offset-4">
            Back to all vans
          </span>
        </Link>


      <div className="flex  lg:flex-row gap-12 mt-4">
              
        <div className="w-full lg:w-1/3">
          <img
            src={currentVan.imageUrl}
            alt={currentVan.name}
            className="w-full rounded-2xl shadow-lg object-cover aspect-4/3"
          />
        </div>

        
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="space-y-6">
            <span className={`inline-block py-1 px-5 rounded-lg text-white font-medium capitalize `}>
              {currentVan.type}
            </span>

            <h1 className="text-4xl font-extrabold text-[#161616]">
              {currentVan.name}
            </h1>

            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">${currentVan.price}</span>
              <span className="text-gray-500 text-lg">/day</span>
            </div>

          </div>
        </div>

      </div>

        {/* the navbar link details*/}
        <nav className="flex gap-30 mt-10 ">
          <NavLink to='.' className={({isActive}) => isActive ? "text-blue-700 text-shadow-blue-300 underline" : 'text-gray-600 hover:text-blue-600' } end>Details</NavLink>
          <NavLink  to='price' className={({isActive}) => isActive ? "text-blue-700 text-shadow-blue-300 underline" : "text-gray-600 hover:text-blue-600" } >Pricing</NavLink>
          <NavLink to='photos'  className={({isActive}) => isActive ? "text-blue-700 text-shadow-blue-300 underline" : "text-gray-600 hover:text-blue-600" } >Photos</NavLink>
        </nav>
       <Outlet context={currentVan}/>
    
    </>
  )
}

export default HostVansDetails