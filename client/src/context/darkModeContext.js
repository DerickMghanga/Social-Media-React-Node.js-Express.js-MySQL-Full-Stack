import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) => {

    //check state setting from user's device, false for first time users
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false);

    const toggle = () =>{
        setDarkMode(!darkMode);
    }

    //set the setting once the user changes to/from darkMode
    useEffect(()=> {
        localStorage.setItem("darkMode", darkMode);
    },[darkMode])

    return(
        <DarkModeContext.Provider value={{toggle, darkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}