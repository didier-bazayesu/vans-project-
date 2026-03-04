import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPhotos() {
    const currentVan = useOutletContext()
  return (
    <div className='mt-10 '>
        <img src={currentVan.imageUrl} width={130} className='rouded-[5px] object-cover' />
    </div>
  )
}

export default HostVanPhotos