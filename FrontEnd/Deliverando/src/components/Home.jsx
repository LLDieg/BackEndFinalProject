import React, { useContext} from 'react'
import Login from './Login.jsx'
import Register from './Register.jsx'
import { MyContext } from '../context/context.jsx';

export default function Home() {
  const { showRegister, setShowRegister } = useContext(MyContext);

  return (
    <>
    <h1>Home</h1>
    {showRegister ? <Login /> : <Register />}
    </>
    
  )
}
