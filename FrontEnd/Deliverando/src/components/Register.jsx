import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/context";
import toast, { Toaster } from "react-hot-toast";
import BASE_URL from "../config/urlConfig";
import "../style/loginRegister.css";

export default function Register() {
  const {setShowRegister}=useContext(MyContext)
  const navigate = useNavigate();

  function showRegistation(){
    setShowRegister(true)
    }


  const registerUser = (e) => {
    e.preventDefault();
    const user = {
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    fetch(`${BASE_URL}/api/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.errors) {
          console.log(result.errors);
          toast.error(JSON.stringify(result.errors));
        } else {
          e.target.reset();
          toast.success("You successfully registered!"); // pop-up message
          setTimeout(() => {
            setShowRegister(false)
            navigate("/");
          }, 1500);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <h1>Register User Page</h1>
      <Toaster position="top-center" /> {/* toast position*/}
      <form onSubmit={registerUser}>
        <label htmlFor="firstname">First Name: </label>
        <input type="text" id="firstname" name="firstname" /> <br />
        <label htmlFor="lastname">Last Name: </label>
        <input type="text" id="lastname" name="lastname" /> <br />
        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" /> <br />
        <label htmlFor="password">Password : </label>
        <input type="password" id="password" name="password" /> <br />
        <button onClick={showRegistation}>Register</button>
      </form>

      <p>Have an account already? <a href="#" onClick={showRegistation}>Sign In!</a></p>
    </div>
  );
}
