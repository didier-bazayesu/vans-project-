import React from "react"
import bgImg from "../assets/friens.png"
import { Link } from "react-router-dom"

export default function About() {
    return (
       <div>
            <div className="w-full h-100">
                <img src={bgImg} alt="" className="w-full h-full object-top-right" />
            </div>
            <div className=" flex flex-wrap flex-col space-y-5 mx-5">
                <h1  className="font-semibold text-[32px]">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className="text-[16px]">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p> <br />
                <p className="text-[16px]">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="bg-[#ffcc8d] mx-5 w-123.5 md:w-[1230px] h-49.5 rouded-[5px] p-5 mt-5 mb-5  space-y-5">
                <h2 className="text-[24px] font-bold">Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="w-38.5 h-7 p-2  rounded-[10px] bg-black text-white" to="/vans" >Explore our vans</Link>
            </div>
        </div>
    );
}