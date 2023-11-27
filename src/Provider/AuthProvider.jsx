import { createContext, useState } from "react";
import PropTypes from "prop-types"
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext=createContext()


const AuthProvider = ({children}) => {
   const [loading,setLoading]=useState(true)
   //Register user
   const createUser=(email,password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
   }
   //Login User
   const loginUser=(email,password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password)
   }
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

   const authInfo={
      loading,
      createUser,
      loginUser,
      googleLogin,
      githubLogin

   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};
AuthProvider.propTypes = {
   children: PropTypes.node,
 };
export default AuthProvider;