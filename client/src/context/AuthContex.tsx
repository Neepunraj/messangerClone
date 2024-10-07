import { useMutation } from "@tanstack/react-query";
import axios, { Axios } from "axios";
import { createContext, ReactNode, useContext } from "react";




type AuthContext ={

}
type AuthProviderProps={
    children : ReactNode
}

type User ={
    id:string
    name:string
    image?:string
}

const Context = createContext<AuthContext | null>(null)


export function iseAuth(){
    return useContext(Context) as AuthContext 
}


export function AuthProvider ({children}:AuthProviderProps){


const signup = null;

    <Context.Provider value={{
       signup
    }}>
        {children}
    </Context.Provider>

}