import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FirstContext = createContext()

const FirstContextProvider = ({ children }) => {
    const [userRole, setUserRole]= useState("USER")
    const [isAuthenticated, setIsAuthenticated] = useState()
    const navigate = useNavigate()


    useEffect(() => {
        const localdata = localStorage.getItem('authenticated')
        console.log("Local data:", localdata);
        if (localdata) {
            setIsAuthenticated(localdata)
        }
        else {
            setIsAuthenticated(false)
        }
        console.log()
    }, [])

    const login = () => {
        //do login logic
        console.log(isAuthenticated)
        setIsAuthenticated(true)
        localStorage.setItem("authenticated", true)
    }

    const logout = () => {
        //do logout logic
        setIsAuthenticated(false)
        localStorage.removeItem("authenticated")

    }

    return (
        <FirstContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </FirstContext.Provider>
    )

}

export const useFirst = () => {
    const context = useContext(FirstContext)
    if (!context) throw Error("cannot be used withouut inside the provider")
    return context
}

export default FirstContextProvider;