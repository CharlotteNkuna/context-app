import React, { useContext } from 'react'
import { UserContext } from '../Context/userContext'
import { createContext } from 'react'

function Profile() {
    //fetch values from context
    const{name,age} = useContext(UserContext)
  return (
    <div>
        <h1>User Profile</h1>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
    </div>
  )
}

export default Profile
