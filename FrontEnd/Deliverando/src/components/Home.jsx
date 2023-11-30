import React from 'react'
import NavBar from './NavBar.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'

export default function Home() {
  return (
    <>
    <NavBar/>
    <h1>Home</h1>
    <Login/>
    <Register/>
    </>
    
  )
}
