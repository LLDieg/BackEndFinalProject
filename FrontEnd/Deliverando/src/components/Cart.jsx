import React, { useContext } from "react";
import { MyContext } from "../context/context";
import toast, { Toaster } from "react-hot-toast";
import BASE_URL from "../config/urlConfig";
import "../style/cart.css"

export default function Cart() {
  const { cart, setCart, user } = useContext(MyContext);
  let totalPrice = 0;

  const handleDelete = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const getTotalPrice = () => {
    
    for ( let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price;
    }
    return totalPrice;
  };

  const addOrder = (e) => {
    e.preventDefault();

    const order = {
      products: cart, // restaurant Id ordered from
      totalPrice: totalPrice, // total price
      userId: user._id // user Id currently logged in
    };
   console.log(order.products);
    fetch(`${BASE_URL}/api/orders/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json", token: localStorage.getItem("token") },
      body: JSON.stringify(order),
    }).then((res) => {
      return res.json();
    })
      .then((result) => {
        if (result.errors) {
          console.log(result.errors);
          toast.error(JSON.stringify(result.errors));
        } else {
          toast.success("You successfully ordered!"); // pop-up message
        }
      })
      .catch((err) => console.log(err));
  };





  return (
    <div>
      <h1>Cart</h1>
      <Toaster position="top-center" /> {/* toast position*/}
      {cart.length === 0 ? (
        <div> 
          <p>Your cart is empty :disappointed:</p>
          <p>Choose something to eat! :hamburger::yum::pizza:</p>
        </div>
      ) : (
        <table>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td><img src={item.image_url} alt="dish image" /></td>
              <td>{item.dishName}</td>
              <td>{item.price} €</td>
              <td><button className="delete" onClick={() => handleDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
       <p>Total Price: {getTotalPrice()} €</p>

       <button onClick={addOrder}>Confirm the order</button>
    </div>
  );
}













// import React, { useContext } from "react";
// import { MyContext } from "../context/context";
// import { useNavigate } from "react-router-dom";

// export default function Cart() {
//   const { cart, setCart, user } = useContext(MyContext);
//   const navigate = useNavigate();

//   const handleDelete = (index) => {
//     const newCart = [...cart];
//     newCart.splice(index, 1);
//     setCart(newCart);
//   };

//   const handleCheckout = async () => {
//     // const token = localStorage.getItem("token");//!

//     try {
//       if (!user) {
//         // Navigate to the login page if not authenticated
//         navigate("/");
//         return;
//       }

//       // Send request to create the order
//       const response = await fetch("/api/orders/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           // token: token, //!
//         },
//         body: JSON.stringify({
//           products: cart.map((item, index) => ({ dish: item, quantity: 1, index })),
//           totalPrice: getTotalPrice(),
//         }),
//       });

//       if (response.ok) {
//         // If the order is successfully created, clear the cart
//         setCart([]);
//         // navigate to profile after confirm order
//         navigate("/profile");
//       } else {
//         console.error("Error creating order");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const getTotalPrice = () => {
//     let totalPrice = 0;
//     for (let i = 0; i < cart.length; i++) {
//       totalPrice += cart[i].price;
//     }
//     return totalPrice;
//   };

//   return (
//     <div>
//       <h1>Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index}>
//               <img src={item.image_url} alt="Dish image" />
//               {item.dishName}
//               <span>Price: {item.price} €</span>
//               <button onClick={() => handleDelete(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       <p>Total Price: {getTotalPrice()} €</p>
//       <button onClick={handleCheckout}>Checkout</button>
//     </div>
//   );
// }
