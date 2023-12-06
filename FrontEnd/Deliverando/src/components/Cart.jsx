import React, { useContext } from "react";
import { MyContext } from "../context/context";

export default function Cart() {
  const { cart, setCart } = useContext(MyContext);

  const handleDelete = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    for ( let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price;
    }
    return totalPrice;
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image_url} alt="dish image" /> 
              {item.dishName}
              <span>Price: {item.price} €</span> 
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
       <p>Total Price: {getTotalPrice()} €</p>

       <button>Confirm the order</button>
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
