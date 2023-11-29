import React from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
    //todo=>user is logged in const {user} = useContext(MyContext)
  return (
    <nav>
        <img src="#" alt="logo" /> 

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>

       {/*todo=> change to see only when the user is logged in */}
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/profile">Profile</Link></li>

      </ul>

      <button>Delivery</button> {/* switch */}
      <button>Collection</button>
    </nav>
  );
}
