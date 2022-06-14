import { createContext, useContext, useState } from "react";

const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [email, seteMail] = useState()
    const [epassword, setePassword] = useState()
    const [user, setUser] = useState()


    const values = {
        user,
        setUser,
        email,
        seteMail,
        epassword,
        setePassword
    }


    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)