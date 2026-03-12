import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVaninfo() {
    let informations = useOutletContext() ;
   
    
    return (
        <div className="space-y-4 text-[#161616] mt-10">
            
            <h4>
            <span className="font-extrabold">Name: </span>
            {informations.name}
            </h4>

            <h4>
            <span className="font-extrabold">Category: </span>
            {informations.type}
            </h4>

            <h4 className="leading-relaxed">
            <span className="font-extrabold">Description: </span>
            {informations.description}
            </h4>

            <h4>
            <span className="font-extrabold">Visibility: </span>
            public
            </h4>

        </div>
    )

}

export default HostVaninfo