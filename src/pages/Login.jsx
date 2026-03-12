import React, { useState } from "react"
import { useNavigate, useSearchParams, useLocation, useLoaderData, data } from "react-router-dom"
import { loginUser } from "../mirageLibrary/API";

export function loader({request}){
      const url = new URL(request.url);
     const message = url.searchParams.get("message")
     return message
}

export default function Login() {
    const  message = useLoaderData();
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [error ,setError] = useState(null)
    const [status ,setStatus] = useState('Idle')

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting...")
        loginUser(loginFormData).then(data=>console.log(data)).catch(error=>  setError(error)).finally(()=>{setStatus("Idle")})
    }
    
 


    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

   

    return (
        <div className="login-container">
            {/* 👇 show message if exists */}
            {message && (
                <p className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded mb-4">
                    {message}
                </p>
            )}
            {error&& <h1 className="text-red-400 ">{error.message}</h1>}
            <h1 className="font-bold text-3xl mt-10 mb-10">Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button  disabled={status === "submitting..."}>{status === "submitting..." 
                        ? "Logging in..." 
                        : "Log in"
                }</button>
            </form>
        </div>
    )
}