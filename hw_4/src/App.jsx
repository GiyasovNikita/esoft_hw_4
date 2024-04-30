import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountdownTimer from './components/CountdownTimer.jsx'
import UserList from './components/UserList.jsx'
import WindowSize from './components/WindowSize.jsx'

function App() {
  return (
    <>
      <CountdownTimer/>
      <UserList/>
      <WindowSize/>
    </>
  )
}

export default App
