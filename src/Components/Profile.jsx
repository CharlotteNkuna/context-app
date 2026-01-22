import React, { useContext } from 'react'
import { UserContext } from '../Context/userContext'
import { createContext } from 'react'

function Profile() {
    //fetch values from context
    const{user,updateAge} = useContext(UserContext)
  return (
    <div>
        <h1>User Profile</h1>
        <h2>Name: {user.name}</h2>
        <h2>Age: {user.age}</h2>
        <button onClick={()=>updateAge(user.age +1)}>Birthday!(Increase Age)</button>
    </div>
  );
};

export default Profile;
