// import React from "react";
// import { Link } from "react-router-dom";
// import "../style/navBar.css";

// export default function NavBar() {
//     //todo=>user is logged in const {user} = useContext(MyContext)
//   return (
//     <nav>
//         <img src="#" alt="logo" /> 

//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/restaurants">Restaurants</Link></li>

//        {/*todo=> change to see only when the user is logged in */}
//         <li><Link to="/cart">Cart</Link></li>
//         <li><Link to="/profile">Profile</Link></li>

//       </ul>

//       <button>Delivery</button> {/* switch */}
//       <button>Collection</button>
//     </nav>
//   );
// }






import React from "react";
import { Link } from "react-router-dom";
import "../style/navBar.css";
import { useContext } from 'react';
import { MyContext } from '../context/context';

export default function NavBar() {
  const {user} = useContext(MyContext)
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
            </>
          )}
         
      </ul>
      </div>

      <div>
      <button className="nav-button">Delivery</button> {/*shuold be a switch */}
      <button className="nav-button">Collection</button>
      </div>
    </nav>
  );
}
