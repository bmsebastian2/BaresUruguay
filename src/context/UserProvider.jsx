import { useState, createContext } from "react"
import {  signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase'
export const UserContext = createContext()

const UserProvider = ({children}) => {

    const [user,setUser] = useState(false)

    const loginUser = (password,email) =>signInWithEmailAndPassword(auth, 'bm2@gmail.com',123456)
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
    
    return (
        <UserContext.Provider value={{user, loginUser}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider