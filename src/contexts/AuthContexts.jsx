import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}
 
const {isAuth, setAuth} = useAuth
export function AuthProvider(props){
    const [isAuth, setIsAuth] = useState(localStorage.getItem('token') || null)

    const value = {
        isAuth,
        setIsAuth
    }

    return <AuthContext.Provider value={value}>{props.childre}</AuthContext.Provider>
}