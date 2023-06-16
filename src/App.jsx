import { LoginForm } from './components/LoginForm'
import { auth } from './helpers/firebase/firebase'
import { useUser } from './hooks/useUser'


function App() {
  const { isLoading, user, _signInWithEmailAndPassword, _signOut, error } = useUser(auth)
  const { email } = user || false
  const { message } = error || false
  
  const handleSign = ({username: email, password}) => {
    _signInWithEmailAndPassword(email, password)
  }

  const handleSignOut = () => {
    _signOut()
  }

  return (
   <>
   <h1>Ejemplo de conexión</h1>
   <LoginForm onsubmit={handleSign} />
   {message}
   {email}
   {isLoading && 'Cargando....'}
   
   </>
  )
}

export default App
