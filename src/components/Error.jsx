import { useRouteError, isRouteErrorResponse } from "react-router-dom"

function Error() {
    const error = useRouteError()

    // Redirect responses are not real errors — let React Router handle them
    if (isRouteErrorResponse(error) && error.status === 302) {
        return null
    }

    return (
        <>
            <h1 className="font-bold text-4xl">Error: {error.message}</h1>
            <pre>status: {error.status} - {error.statusText}</pre>
        </>
    )
}

export default Error