import React, { useContext } from 'react'
import { UserContext } from '../Context/userContext'
import { createContext } from 'react'

function Profile() {
    //fetch values from context
    const{name,age} = useContext(UserContext)
  return (
    <div>
        <h1>User Profile</h1>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>


      
    </div>
  )
}

export default Profile
