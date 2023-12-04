import React, { useEffect } from "react";
export default function DishCart() {
const [ restaurant, setRestaurant ] = useState([]);

useEffect(()=> {
fetch("#")
.then((res) => res.json())
.then((data) => {
  console.log(data);
  setProducts(data.restaurant);
});
}, []);


  return <div className="dishCard">
<img src="#" alt="Dish picture"> </img>
<h3>Dish Name</h3>
<p>Price</p>
  </div>;
}