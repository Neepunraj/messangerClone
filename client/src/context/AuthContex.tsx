import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios, {  AxiosResponse } from "axios";
import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";




type AuthContext ={
    signup:UseMutationResult<AxiosResponse,unknown,User>
    login:UseMutationResult<{token:string,user:User}, unknown,string>
    user?:User

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


export function useAuth(){
    return useContext(Context) as AuthContext 
}


export function AuthProvider ({children}:AuthProviderProps){

    
    const [user,setUser] = useLocalStorage<User>("user");

    const signup = useMutation({mutationFn:(user:User)=>{
        return axios.post(`${import.meta.env.VITE_SERVER_URL}`,user)
    }});

    <Context.Provider value={{
       signup,
       user
    }}>
        {children}
    </Context.Provider>

}