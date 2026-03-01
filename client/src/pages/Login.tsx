import { AtSignIcon, User } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../context/AppContext"


const Login = () => {


  const [state, setState] = useState('sign up')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showpassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

   const navigate = useNavigate()
   const  {login, signup, user} =  useAppContext()

   useEffect(()=>{
    if(user){
      navigate('/')
    }
   },[user, navigate])

  return (
    <>
      <main className="login-page-container">
        <form className="login-form">
          <h2 className="text-3xl font-medium text-gray-900 dark:text-white">
            {state === 'login' ? "Sign In" : "Sign up"}
          </h2>
          <p className="mt-2 text-sm text-gray-500/90 dark:text-gray-400">
            {state === 'login' ? 'Please enter email and password to access.' : 'Please enter your details to create an account.'}
          </p>
          {/* user name */}
          {state !== 'login'  && (
            <div className="mt-4">
              <label className="font-medium text-sm text-gray-700 dark:text-gray-300">
                Username
              </label>
              <div className="relative mt-2" > 
                <AtSignIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4.5" />
               <input onChange={(e)=>setUsername(e.target.validationMessage)} value={username}
               type="text" placeholder="enter user name" 
               className="login-input" required/>
              </div>
             </div>
          )}
        </form>
      </main>
    </>
  )
}

export default Login
