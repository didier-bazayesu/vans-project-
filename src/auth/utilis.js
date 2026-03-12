import { redirect } from "react-router-dom"

export function requireAuth({ request }) {
    const isLoggedIn = false

    if (!isLoggedIn) {
        const url = new URL(request.url)
        throw redirect(`/login?redirectTo=${url.pathname}`)
    }

    return null
}