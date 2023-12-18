import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    //fetch user info from localstorage and convert back to Object
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null);

    const logIn = () =>{
        //TO DO

        setCurrentUser({id:1, name: "John Doe", profilePic:"https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"});
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