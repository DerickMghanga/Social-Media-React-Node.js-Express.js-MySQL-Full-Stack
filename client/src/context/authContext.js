import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    //fetch user info from localstorage and convert back to Object
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null);

    
    //Login page functionality
    const logIn = async(inputs) =>{
        await axios.post("http://localhost:8800/api/auth/login", inputs, {
            withCredentials: true,
        }).then((res)=>{
            //console.log(res.data);
            setCurrentUser(res.data);
        })
    }

    //updates the stored Object of user info incase it changes
    useEffect(()=> {
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser])

    return(
        <AuthContext.Provider value={{currentUser, logIn}}>
            {children}
        </AuthContext.Provider>
    )
}