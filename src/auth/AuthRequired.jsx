import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function AuthRequired() {
    const isLoggedIn = false
    const location = useLocation()
     const message = 'You must log in to view this page.'
    if (!isLoggedIn) {
        return (
            <Navigate 
                to={`/login?message=${encodeURIComponent(message)}`}
                state={{ message: "You must log in to view this page." }}
                replace
            />
        )
    }

    return <Outlet /> 
}