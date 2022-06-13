import { createContext, useContext, useState } from "react";

const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [mail, setMail] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useState()


    const values = {
        user,
        setUser,
        mail,
        setMail,
        password,
        setPassword
    }


    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)