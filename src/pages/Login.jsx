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
  return {message :url.searchParams.get("message"), expectedPath:url.searchParams.get('redirectTo') }
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
  const {message,expectedPath} = useLoaderData()
  const result = useActionData()
  const navigateToLogin = useNavigate();
  const navigation = useNavigation();
 
  

  
   useEffect(() => {
    if (result?.success) {
      navigateToLogin(`${expectedPath?expectedPath:'/vans'}`);
    }
  }, [result, navigateToLogin])

  return (
    <div className="login-container">

      {message && <p className="text-red-500 mt-10">{message}</p>}
      {result?.error && <p className="text-red-500 mt-10">{result.error}</p>}

      <h1 className="font-bold text-3xl mt-10 mb-10">Sign in to your account</h1>

      <Form method="post" className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />

        <button disabled={navigation.state === "submitting"}  className={navigation.state == "submitting" ? 'bg-red-200' : 'bg-[#FF8C38]' }>{`${navigation.state == 'idle' ? 'Login' : navigation.state +'...'}`}</button>
      </Form>
    </div>
  )
}
