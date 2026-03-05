import React from "react"
import { Link } from "react-router-dom"
import images from '../assets/image.png'

export default function Home() {
    return (
        <div 
          className=" bg-cover bg-center min-h-screen h-[430.1px] text-white text-right flex flex-col justify-center items-center space-y-5 pr-5 md:pr-0"
          style={{ backgroundImage: `url(${images})` }}

        >

            <h1 className="text-3xl font-bold">You got the travel plans, we got the travel vans.</h1>
            <p className="flex flex-wrap ">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans" className="md:w-125 w-80 h-12.5 bg-[#ff8c38] rounded-[5px] text-center pt-2  hover:text-black hover:border-red-500 hover:border-2">Find your van</Link>
        </div>
    )
};