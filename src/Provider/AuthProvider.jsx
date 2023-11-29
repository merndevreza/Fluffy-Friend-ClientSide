import { createContext, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axiosSecure=useAxiosSecure()
  //Register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Login User
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Google login
  const googleLogin = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  //github login
  const githubLogin = () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };
  //log out user
  const logOutUser=()=>{
   setLoading(true);
   return signOut(auth);
  }
  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
        const userInfo={
          "name":user.displayName,
          "email":user.email,
          "photo":user.photoURL,
          "role":"user"
        }
        axiosSecure.post("/users",userInfo) 
      } else {
        // console.log("user is signed out");
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [axiosSecure]);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    githubLogin,
    logOutUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
