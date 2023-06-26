import { LoginForm } from "../components/LoginForm"
import { auth } from "../helpers/firebase/firebase"
import { useUser } from "../hooks/useUser"

 export function LoginPage () {
  const { isLoading, email, error, _signInWithEmailAndPassword, _signOut } = useUser(auth)
  const { message } = error || false
  
  const handleSign = ({ email, password}) => {
    _signInWithEmailAndPassword(email, password)
  }

  const handleSignOut = () => {
    _signOut()
  }

  return (
   <>
   <h1 className='text-5xl font-bold text-white'>Área personal</h1>
   <LoginForm onSubmit={handleSign} onSignOut={handleSignOut} />
   {message}
   {email}
   {isLoading && 'Cargando....'}
   
   </>
  )
}

