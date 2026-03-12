import { Navigate, useLocation } from "react-router-dom"

export default function ProtectedRoute({ children }) {
    const isLoggedIn = false
    const location = useLocation()

    if (!isLoggedIn) {
        return (
            <Navigate 
                to={`/login?redirectTo=${location.pathname}`} 
                replace 
                state={{ message: "You must log in first." }}  // 👈 pass message
            />
        )
    }

    return children
}