import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom" // Don't forget to import this!
import { useSearchParams } from "react-router-dom"
import getVans from "../mirageLibrary/API";

export default function Vans() {
    let[isLoading ,setisLoading ] =useState(false);
    let[error,setError] = useState(null);
    const [vans, setVans] = useState([])
    const[params , setParams] = useSearchParams();
    let type = params.get('type')
    type = type !== null? type.toLowerCase(): ''

    useEffect(() => {
        async function loadVans() {
            setisLoading(true);
            try{
                const data = await getVans()
                setVans(data)

            }catch(error){
                setError(error);
            }finally{
                setisLoading(false);

            }
        }
        
        loadVans()
    }, [])
     
    const displayedVans = type
    ? vans.filter(van => van.type === type)
    : vans

    const vanElements =(displayedVans || []).map(van => {
        // Handle logic for colors before the return
        const typeClass = van.type === "simple" ? "bg-[#E17654]" : 
                         van.type === "rugged" ? "bg-[#115E59]" : "bg-[#161616]"

        return (
            <div key={van.id} className="van-tile group">
                {/* Wrap the content in a Link to make it clickable */}
                <Link 
                 to={`${van.id}`} 
                 className="text-inherit no-underline"
                 state={{search :`?${params.toString()}`,name: `${type}`}}
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


    if(error) return <div aria-live="polite">
                          <p className="font-bold"> {`Error${error.status} : `}  {error.message}</p>
                          <Link className=" text-blue-500 underline" to='/'>return home</Link>
                    </div> 
    if(isLoading) {
        return  <div aria-live="assertive" className="flex flex-col items-center justify-center h-64 space-y-4">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-[#FF8C38] rounded-full animate-spin"></div>
                    <p className="text-gray-500 animate-pulse">Loading  all vans...</p>
                </div>
    }
    
    return (
        <> 
          
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
          
        </>
    )
}