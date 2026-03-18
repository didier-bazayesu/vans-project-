import React, { Suspense } from 'react'
import { Await, Link, useLocation } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import getVans from '../mirageLibrary/API'
import isLoading from '../help/HelperFunction'

export function loader({ params }) {
    // Return a promise for <Await>
    return { van: getVans(params.id) }
}

function VanDetails() {
    const location = useLocation()
    const { van } = useLoaderData() // van is a promise

    const search = location.state?.search ?? ''
    const name = location.state?.name ?? 'vans'

    function handleDeferVanDetails(van) {
        if (!van) return null

        const typeClass =
            van.type === "simple" ? "bg-[#E17654]" :
            van.type === "rugged" ? "bg-[#115E59]" :
            "bg-[#161616]"

        return (
            <div className="flex flex-col lg:flex-row gap-12 mt-4">
                <div className="w-full lg:w-1/2">
                    <img
                        src={van.imageUrl}
                        alt={van.name}
                        className="w-full rounded-2xl shadow-lg object-cover aspect-4/3"
                    />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="space-y-6">
                        <span className={`inline-block py-1 px-5 rounded-lg text-white font-medium capitalize ${typeClass}`}>
                            {van.type}
                        </span>

                        <h1 className="text-4xl font-extrabold text-[#161616]">
                            {van.name}
                        </h1>

                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold">${van.price}</span>
                            <span className="text-gray-500 text-lg">/day</span>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-gray-200 pl-4">
                            {van.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-100">
                            <div>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Availability</p>
                                <p className="font-semibold text-green-600">Instantly Bookable</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Transmission</p>
                                <p className="font-semibold">Automatic</p>
                            </div>
                        </div>
                         <a href="">
                            <button className="bg-[#FF8C38] hover:bg-[#e67e32] transition-all w-full py-4 rounded-xl text-white font-bold text-xl shadow-md active:scale-95 cursor-pointer">
                                Rent this van
                            </button>
                         </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto p-6 md:py-12">
            <Link
                to={`..${search}`}
                relative="path"
                className="text-gray-500 hover:text-black transition-colors mb-8 inline-block"
            >
                &larr; <span className="underline decoration-1 underline-offset-4">
                    {`Back to all ${name}`}
                </span>
            </Link>

            <Suspense fallback={isLoading()}>
                <Await
                    resolve={van}
                    errorElement={
                        <p className="text-red-500 text-center">
                            Failed to load van details. Please try again later.
                        </p>
                    }
                >
                    {handleDeferVanDetails}
                </Await>
            </Suspense>
        </div>
    )
}

export default VanDetails
