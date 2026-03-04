import React, { useEffect, useState } from 'react'
import {  useParams,Link } from 'react-router-dom'
function HostVansDetails() {
  let[currentVan,setCurrentVan] = useState(null);
   const {id} = useParams();
  useEffect(()=>{
        fetch(`/api/host/vans/${id}`).then(resp=> resp.json())
                                      .then(data => setCurrentVan(data.vans))
  },[id])

  if(!currentVan) return <h1 className='text-2xl font-bold'>Loading.......</h1>
    
  return (
    <>

      <Link 
        to="/vans" 
        className="text-gray-500 hover:text-black transition-colors mb-8 inline-block"
      >
        &larr; <span className="underline decoration-1 underline-offset-4">Back to all vans</span>
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
    
    </>
  )
}

export default HostVansDetails