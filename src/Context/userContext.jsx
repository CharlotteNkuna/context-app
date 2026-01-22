import { children, createContext, useState } from 'react'

//create the context object
export const UserContext = createContext();

//create a provider
export const UserProvider = ({children})=>{
    const [user, setUser] = useState({
        name: "Charlene",
        age: 30
    });

    // this function is here so that it cal also be called via the provider
    //Function to update context values
    const updateAge =(newAge) =>{
        //setter fx
        setUser({
            //coppying previous object to reference data
            ...user, age: newAge
        });
    };

    return(
        <UserContext.Provider value={{user, updateAge}}> 
            {children}
        </UserContext.Provider>
    );
};