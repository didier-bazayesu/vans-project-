import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function AuthRequired() {
    const isLoggedIn = true
    const location = useLocation()

    if (!isLoggedIn) {
        return (
            <Navigate 
                to="/login" 
                state={{ message: "You must log in to view this page." }}
                replace
            />
        )
    }

    return <Outlet /> 
}