import React from "react";
import { Link } from "react-router-dom";
import "../style/navBar.css";
import { useContext } from 'react';
import { MyContext } from '../context/context';

export default function NavBar() {
  const {user} = useContext(MyContext)

  // Removing the token from localStorage
  const handleLogout = () => {
    localStorage.removeItem('token');
    
  };

  return (
    <nav className="navbar">

      <img src="pubblic/logo.png" style={{ width: 100 }} alt="logo" />

    <div>
      <ul>
        <li><Link to="/"> 🏠 Home</Link></li>
        <li><Link to="/restaurants"> 🍝 Restaurants</Link></li>

         {user && (
            <>
              <li><Link to="/cart" >🛒 Cart</Link></li>
              <li><Link to="/profile" >👤 Profile</Link></li>
              <li className="logout" onClick={handleLogout} ><Link to="/" >Logout</Link></li>
            </>
          )}
         
      </ul>
      </div>

      {/* <div>                       FOR LATER
      <button className="nav-button">Delivery</button> {/*shuold be a switch 
      <button className="nav-button">Collection</button>
      </div> */}
    </nav>
  );
}
