import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import UseAxiosPublic from "../hooks/UseAxiosPublic";


export const AuthContext = createContext(null);

const auth = getAuth(app) ;


const AuthProvider = ({children}) => {
    
    const [user,setUser]= useState(null);
    const [loading,setLoading] =useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = UseAxiosPublic();


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
            // console.log('user in the auth state changed',currentUser);
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo ={email:currentUser.email};
                axiosPublic.post('/jwt',userInfo)
                .then(res =>{
                    if (res.data.token) {
                        localStorage.setItem('access-token',res.data.token);
                    }
                })
            }
            else{
                // TODO:remove token(if token store in the client side:Local storage ,caching,in memory)
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        });
        return()=>{
            unSubscribe();
        } 
    },[axiosPublic])




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