import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'

function HostVans() {
    let[vans,setVans] = useState([]);

    useEffect(()=>{
        fetch('/api/host/vans')
       .then(res => res.json())
            .then(data => setVans(data.vans))

    },[])

    console.log(vans)

    const hostVansEls = vans.map(van => (
    <Link
        to={`/host/vans/${van.id}`}
        key={van.id}
        className="hover:text-2xl hover:text-red-300 "
    >
        <div className="flex gap-2 space-y-5 " key={van.id}>
            <img 
             src={van.imageUrl}
              alt={`Photo of ${van.name}`} 
              className='w-50 5-20  object-cover rounded-[5px]'
            />

            <div className="flex flex-col justify-center">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
        </div>
    </Link>
    ))

  return (
         <section>
            <h2 className='font-bold text-3xl'>Your listed Vans</h2>
            <div className=" mt-5">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
         </section>
      
  )
}

export default HostVans