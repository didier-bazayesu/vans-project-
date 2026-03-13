import { useNavigate } from "react-router-dom"

export default function LogoutButton() {
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem("loggedIn")
        navigate("/login")
    }

    return <button onClick={handleLogout}>Logout</button>
}
