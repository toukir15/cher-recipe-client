import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
// import App from "../App";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  //user login or not check
  const [loginUser, setLoginUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoginUser(null);
      if (user) {
        setLoginUser(user);
      } else {
        setLoginUser(null);
      }
    });
  }, []);

  //sing out
  const userSingOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // resister
  const resister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const signIn = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    resister,
    signIn,
    setUser,
    loginUser,
    userSingOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
