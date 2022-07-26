import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut   } from "firebase/auth";


export const UserAuthContext = createContext();


export const UserAuthContextProvider = ({children})=>{

const [currentUser, setCurrentUser] = useState()

const logIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

const signUp = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

useEffect(()=>{
    const unsubsribe = onAuthStateChanged(auth, (currentUser)=>{
        setCurrentUser(currentUser)
    });
    return ()=>{
        unsubsribe()
    }

},[])

const logOut=()=>{
    signOut(auth)
}



return(
    <UserAuthContext.Provider value={{logIn, signUp, currentUser, logOut}}>
        {children}
    </UserAuthContext.Provider>
)

}
export const UseUserAuthContext=() =>  useContext(UserAuthContext);


