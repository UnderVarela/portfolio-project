import { LoginForm } from './components/LoginForm'
import { auth } from './helpers/firebase/firebase'
import { useUser } from './hooks/useUser'


function App() {
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
   <h1>Ejemplo de conexión</h1>
   <LoginForm onSubmit={handleSign} onSignOut={handleSignOut} />
   {message}
   {email}
   {isLoading && 'Cargando....'}
   
   </>
  )
}

export default App
