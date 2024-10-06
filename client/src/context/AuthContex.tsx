import { createContext, ReactNode, useContext } from "react";
type AuthContext ={

}
const Context = createContext<AuthContext | null>(null)
export function iseAuth(){
    return useContext(Context) as AuthContext 
}
type AuthProviderProps={
    children : ReactNode
}

export function AuthProvider ({children}:AuthProviderProps){
    const count = 0;



    <Context.Provider value={{
        count
    }}>
        {children}
    </Context.Provider>

}