import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPricing() {
    const currentVan = useOutletContext();
  return (
    <div className='mt-10 flex '>
        <p className='font-bold text-4xl'>${currentVan.price} </p>
        <span className='mt-2'>/day</span>
    </div>
  )
}

export default HostVanPricing