import { useState } from 'react'
import { UserProvider } from './Context/userContext';
import Profile from './Components/Profile';

import './App.css'

function App() {

  return (
    <>
    <UserProvider>
      <div className="App">
        <h1>Context Tutorial</h1>
        <Profile />
      </div>
    </UserProvider>
      
    </>
  )
}

export default App
