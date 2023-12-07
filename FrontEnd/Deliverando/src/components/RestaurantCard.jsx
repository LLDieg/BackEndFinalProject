
import React, { useEffect }from 'react'
import { useContext } from 'react';
import { MyContext } from '../context/context';
import BASE_URL from '../config/urlConfig';
import {Link } from 'react-router-dom';
import "../style/restaurantCard.css"


export default function RestaurantCard() {
  const { products, setProducts } = useContext(MyContext);
  useEffect(() => {
    fetch(`${BASE_URL}/api/products/allProducts`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      {products.map((product) => {
        return (
          <Link 
            style={{ textDecoration: 'none', color: '#242e30' }}
            key={product._id}
            to={`/restaurants/${product.restaurantName}`}
            state={product}
          >
            <div className="restaurantCard">
              <img
                src={product.image_url}
                width={300}
                alt="Restaurant picture"
              />
              <h1>{product.restaurantName}</h1>
              <p>Rating: {product.rating}</p>
              <p>Minimum Order: €10 </p>
              <p>Delivery time: 30-50 min | €2.00 Delivery Charge</p>
            </div>
          </Link>
        );
      })}
    </div>
  );

}

