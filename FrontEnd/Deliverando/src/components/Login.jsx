import React, {useContext} from 'react'
import {MyContext} from "../context/context"
import { useNavigate } from 'react-router-dom'
import BASE_URL from "../config/urlConfig";

export default function Login() {

  const {setUser} =useContext(MyContext)
  const navigate = useNavigate()

  const loginUser = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/api/users/login`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify({email: e.target.email.value, password: e.target.password.value})
    })
    .then(res=>{
      const token = res.headers.get("token")
      if(token){
          localStorage.setItem("token",token)
      }
      return res.json()
      })
      .then(result=>{
         if(result.success){
          setUser(result.data) 
          //console.log("restaurants")//!!
          navigate("/restaurants") //! to fix

          }else{
          console.log(result.message)
         }
      })
      .catch(err=>console.log(err))
  }
  return (
    <>
    <div>LEFT SIDE</div>
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email"></input>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password"></input>
        <button>Login</button>
      </form>
      <p>or do it with other accounts</p>
    </div>
    </>
  )
}