import React from "react"
import { useNavigate, useSearchParams, useLocation } from "react-router-dom"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectTo = searchParams.get("redirectTo") || "/host"
    const message = location.state?.message  // 👈 read message

    function handleSubmit(e) {
        e.preventDefault()
        navigate(redirectTo)
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
                <button>Log in</button>
            </form>
        </div>
    )
}