import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "../context/context";

export default function MenuPage() {
  const { cart, setCart } = useContext(MyContext);
  const { state } = useLocation();
  console.log(state);

  // create a new array that includes all the elements from the 
  // previous cart array and adds the new dish  
  function addToCart (dish){
    setCart((prevCart) => [...prevCart, dish]);
  } 

  return (
    <div>
      {state && (
        <div>
          <h1>{state.restaurantName}</h1>
          <div>
            <button>Popular</button>
            <button>Deals</button>
            <button>Mains</button>
            <button>Drinks</button>
          </div>
          <div>
            <p>Minimum order €15 </p>
          </div>

          <div>
            <p>20-50 min.</p>
            <p>Delivery charge €2.50 </p>
          </div>

          {state.dishes.map((dish) => {
            return (
              <div key={dish._id}>
                <div>
                  <div>
                    <h2>{dish.dishName}</h2>

                    <img
                      src={dish.image_url}
                      width={200}
                      alt="restaurant image"
                    />
                    <p>{dish.ingredients}</p>
                    <button onClick={() => addToCart(dish)}>Add to Cart</button>
                  </div>
                </div>
              </div>

            );
          })}
        </div>
      )}

    </div>
  );
}


// import React, { useContext } from "react";
// import { useLocation } from "react-router-dom";
// import { MyContext } from "../context/context";

// export default function MenuPage() {
//   const { cart, setCart } = useContext(MyContext);
//   const { state } = useLocation();
//   console.log(state);

//   function addToCart(dish, index) {
//     setCart((prevCart) => [...prevCart, { ...dish, index }]);
//   }

//   return (
//     <div>
//       {state && (
//         <div>
//           <h1>{state.restaurantName}</h1>
//           <div>
//             <button>Popular</button>
//             <button>Deals</button>
//             <button>Mains</button>
//             <button>Drinks</button>
//           </div>
//           <div>
//             <p>Minimum order €15</p>
//           </div>

//           <div>
//             <p>20-50 min.</p>
//             <p>Delivery charge €2.50</p>
//           </div>

//           {state.dishes.map((dish, index) => {
//             return (
//               <div key={index}>
//                 <div>
//                   <div>
//                     <h2>{dish.dishName}</h2>

//                     <img src={dish.image_url} width={200} alt="Restaurant image" />
//                     <p>{dish.ingredients}</p>
//                     <button onClick={() => addToCart(dish, index)}>Add to Cart</button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }
