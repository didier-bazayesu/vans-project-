import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function AuthRequired() {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true"
    const location = useLocation()

    if (!isLoggedIn) {
        return (
            <Navigate
                to={`/login?message=You must log in to view this page.`}
                state={{ from: location }}
                replace
            />
        )
    }

    return <Outlet />
}
