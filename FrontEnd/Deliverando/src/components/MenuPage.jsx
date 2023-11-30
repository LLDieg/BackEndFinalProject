import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/context";
import BASE_URL from "../config/urlConfig";

export default function MenuPage() {
  const { products, setProducts } = useContext(MyContext);

  useEffect(() => {
    fetch(`${BASE_URL}/api/products/singleProduct/:id"`)
      .then((result) => {
        setProducts(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        {products.map((product) => {
          return (
            <div>

              <div>
                <div key={product._id}>
                  <h1>{product.restaurantName}</h1>

                  <div>
                    <p>{product.rating}</p>
                    <p>Minimum order €15 </p>
                  </div>

                  <div>
                    <p>20-50 min.</p>
                    <p>Delivery charge €2.50 </p>
                  </div>

                  <img
                    src={product.image_url}
                    width={200}
                    alt="restaurant image"
                  />
                </div>
              </div>

              <div>
                <button>Popular</button>
                <button>Deals</button>
                <button>Mains</button>
                <button>Drinks</button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
