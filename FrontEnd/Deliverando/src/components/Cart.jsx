import React, { useContext } from "react";
import { MyContext } from "../context/context";
import toast, { Toaster } from "react-hot-toast";
import BASE_URL from "../config/urlConfig";
import "../style/cart.css";

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
          toast.error(JSON.stringify(result.errors)); //toast
        } else {
          toast.success("You successfully ordered!"); // pop-up message
        }
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="cart">
      <h1>Cart</h1>
      <Toaster position="top-center" /> {/* toast position*/}
      {cart.length === 0 ? (
        <div> 
          <p>Your cart is empty 😞</p>
          <p>Choose something to eat! 🍔😋🍕 </p>
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

       <button className="confirm" onClick={addOrder}>Confirm the order</button>
    </div>
  );
}
