import { children, createContext, useState } from 'react'

//create the context object
export const UserContext = createContext();

//create a provider
export const UserProvider = ({children})=>{
    const [user, setUser] = useState({
        name: "Charlene",
        age: 30
    });

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};