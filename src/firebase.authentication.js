import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase"

// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app)

 async function _signInWithEmailAndPassword (auth, email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {errorCode, errorMessage}
  }
}


async function _signOut (auth) {
  await signOut(auth)
}
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

export {
  auth,
  _signInWithEmailAndPassword,
  _signOut
}