import React from 'react'
import { Link } from 'react-router-dom'


function NotPagefound() {
  return (
    <div className='mx-5 mt-20' >
       <h1 className='font-extrabold text-xl '>Sorry, the page you were looking for was not found.</h1>
        <Link to="/" className='underline text-blue-700'>Return to Home</Link>
    </div>
  )
}

export default NotPagefound