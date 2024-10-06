import { useMutation } from "@tanstack/react-query";
import { createContext, ReactNode, useContext } from "react";




type AuthContext ={

}
type AuthProviderProps={
    children : ReactNode
}


const Context = createContext<AuthContext | null>(null)


export function iseAuth(){
    return useContext(Context) as AuthContext 
}


export function AuthProvider ({children}:AuthProviderProps){
 
const signup = 0;

    <Context.Provider value={{
        signup
    }}>
        {children}
    </Context.Provider>

}