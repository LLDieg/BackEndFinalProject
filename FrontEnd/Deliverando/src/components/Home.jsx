import React, { useContext } from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import { MyContext } from "../context/context.jsx";
import "../style/home.css";

export default function Home() {
  const { showRegister, token } = useContext(MyContext);
  
  return (
    <>
    <div className="reglogSection">
      <div className="contentSection">
        <div className="leftSide">
          <h1>Hungry? Order with Deliverando!</h1>
          <p>"Delivering Happiness, One Meal at a Time."</p>
        </div>
        <div className="rightSide">
          { (showRegister ? <Login /> : <Register />)}
        </div>
      </div>
    </div>
    </>
  );
}
