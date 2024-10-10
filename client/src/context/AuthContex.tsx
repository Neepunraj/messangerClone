import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios, {  AxiosResponse } from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
/* import {StreamChat} from 'stream-chat' */

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
    const [token,setToken] = useLocalStorage<string>("token")
    const [streamChat,setStramChat] = useState<string>()
    const navigate = useNavigate();

    const signup = useMutation({mutationFn:(user:User)=>{
        return axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`,user)
    },
onSuccess(){
    navigate('/login')
}});

const login = useMutation({
    mutationFn:(id:string)=>{
        return axios.post(`${import.meta.env.VITE_SERVER_URL}/login`,{id})
        .then(res=>{
            return res.data as {token:string, user:User}
        })

    },
    onSuccess(data){
        setUser(data.user)
        

    }
});

    <Context.Provider value={{
       signup,
       user,
       login
    }}>
        {children}
    </Context.Provider>

}