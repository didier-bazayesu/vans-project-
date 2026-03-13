import React,{useEffect} from "react"
import { 
  useNavigate,
  useLoaderData,
  Form,
  redirect,
  useActionData
  ,useNavigation
  
} from "react-router-dom"

import { loginUser } from "../mirageLibrary/API";

export function loader({ request }) {
  const url = new URL(request.url)
  return url.searchParams.get("message")
}

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  

  try {
    const data = await loginUser({ email, password })
    localStorage.setItem("loggedIn", "true")

    if (email === data.user.email) {
      return { success: true, user: data.user }
    }

    return { error: "Invalid credentials" }

  } catch (error) {
    return { error: error.message }
  }
}


export default function Login() {
  const message = useLoaderData()
  const result = useActionData()
  const navigate = useNavigate()

   useEffect(() => {
    if (result?.success) {
      navigate("/host/vans")
    }
  }, [result, navigate])

  return (
    <div className="login-container">

      {message && <p>{message}</p>}
      {result?.error && <p>{result.error}</p>}

      <h1 className="font-bold text-3xl mt-10 mb-10">Sign in to your account</h1>

      <Form method="post" className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />

        <button>Log in</button>
      </Form>
    </div>
  )
}
