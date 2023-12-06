import React, { useContext } from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import { MyContext } from "../context/context.jsx";

export default function Home() {
  const { showRegister, token } = useContext(MyContext);
  
  return (
    <>
    <h1>Home</h1>
    {token ? (<h2>welcome</h2>) : (showRegister ? <Login /> : <Register />)}
    </>
  );
}
