import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom" // Don't forget to import this!
import { useSearchParams } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = useState([])
    const[params , setParams] = useSearchParams();
    let type = params.get('type')
    type = type !== null? type.toLowerCase(): null

    

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.filter(element => type? element.type == type : true).map(van => {
        // Handle logic for colors before the return
        const typeClass = van.type === "simple" ? "bg-[#E17654]" : 
                         van.type === "rugged" ? "bg-[#115E59]" : "bg-[#161616]"

        return (
            <div key={van.id} className="van-tile group">
                {/* Wrap the content in a Link to make it clickable */}
                <Link 
                 to={`${van.id}`} 
                 className="text-inherit no-underline"
                 state={{search :`?${params.toString()}`}}
                >


                    <img 
                        src={van.imageUrl} 
                        className="w-full aspect-square rounded-lg object-cover" 
                        alt={van.name}
                    />
                    <div className="flex justify-between items-start mt-4">
                        <h3 className="text-xl font-bold">{van.name}</h3>
                        <p className="flex flex-col text-right">
                            <span className="text-lg font-semibold">${van.price}</span>
                            <span className="text-sm font-light">/day</span>
                        </p>
                    </div>
                    <i className={`mt-2 py-2 px-6 rounded-md text-white not-italic inline-block font-semibold capitalize ${typeClass}`}>
                        {van.type}
                    </i>
                </Link>
            </div>
        )
    })

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-8">Explore our van options</h1>


            <div className="flex my-5 gap-10">
            
                <NavLink
                    to="?type=simple"
                    className={
                    type === "simple"
                        ? "text-orange-600 underline font-bold "
                        : "text-blue-500 "
                    }
                >
                    Simple
                </NavLink>

                <button
                    onClick={()=> (setParams({type: 'rugged'}))}
                    className={
                    type === "rugged"
                        ? "text-teal-700 underline font-bold"
                        : "text-blue-500 cursor-pointer"
                    }
                >
                    Rugged
                </button>

                <button
                    onClick={()=> (setParams({type: 'luxury'}))}
                    className={
                    type === "luxury"
                        ? "text-black underline font-bold"
                        : "text-blue-500 cursor-pointer"
                    }
                >
                    Luxury
                </button>

               { type &&   <button
                    onClick={()=> (setParams({}))}
                    className={
                    type === "rugged"
                        ? "text-teal-700 underline font-bold"
                        : "text-blue-500 cursor-pointer"
                    }
                >
                    clear
                   </button>
                }

            </div>
           
            
            <div className="grid grid-cols-3 gap-8">
                {vanElements}
            </div>
        </div>
    )
}