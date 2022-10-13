import { useState, createContext, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebase";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const onSuscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (user) {
        const { email, photoURL, displayName, uid } = user;
        setUser({ email, photoURL, displayName, uid });
      } else {
        setUser(null);
      }
    });

    return () => onSuscribe();
  }, []);

  const loginUser = (password, email) =>
    signInWithEmailAndPassword(auth, password, email);
  const signOutUser = () => signOut(auth);

  return (
    <UserContext.Provider value={{ user, loginUser, signOutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
