import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function AuthRequired() {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true"
    const location = useLocation()
    console.log(location);

    if (!isLoggedIn) {
        return (
            <Navigate
                to={`/login?message=${encodeURIComponent("You must log in to view this page.")}&redirectTo=${location.pathname}`}
                state={{ from: location }}
                replace
            />
        )
    }

    return <Outlet />
}
