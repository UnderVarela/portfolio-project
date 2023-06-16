import { auth } from './helpers/firebase/firebase'
import { useUser } from './hooks/useUser'


function App() {
  const { isLoading, user, _signInWithEmailAndPassword, _signOut, error } = useUser(auth)
  const { email } = user || false
  const { message } = error || false
  
  const handleSign = () => {
    const email = 'under.varela@gmail.com'
    const password = 'Triquinosis4'
    _signInWithEmailAndPassword(email, password)
  }

  const handleSignOut = () => {
    _signOut()
  }

  return (
   <>
   <h1>Ejemplo de conexión</h1>
   <fieldset>
    <legend>Acceso privado </legend>
    { email }
    { message && <div></div>}
    { isLoading && 'Cargando....' }
    { !email 
         ? <button onClick={handleSign}>Login</button>
         : <button onClick={handleSignOut}>Cerrar sesión</button>
    }
   </fieldset>
   </>
  )
}

export default App
