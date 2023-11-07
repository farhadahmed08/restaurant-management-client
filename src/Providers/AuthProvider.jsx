import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app) 


const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null);
    const [loading,setLoading] =useState(true);


    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }


    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,(currentUser)=>{
            console.log('user in the auth state changed',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
            unSubscribe();
        } 
    },[])




    const authInfo ={
        user,
        loading,
        signInWithGoogle,
        createUser,
        signIn,
        logOut
    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;