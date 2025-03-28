import { createContext } from "react";
import React, { useState } from 'react'

export const AppContext = createContext()

const AppContextprovider = (props) =>{
    const[user , setUser]  = useState(false); // check form user login or not
    const [showLogin,setShowLogin] = useState(false);
    const value = {
        user,setUser,setShowLogin,showLogin
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextprovider;