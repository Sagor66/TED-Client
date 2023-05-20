
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const githubSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      console.log('logged in user', loggedUser)
      setUser(loggedUser)
      setLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    createUser,
    signInUser,
    logOut,
    loading,
    googleSignIn,
    githubSignIn
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;