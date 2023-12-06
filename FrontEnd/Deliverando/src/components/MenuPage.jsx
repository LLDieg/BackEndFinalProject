import { useLocation } from "react-router-dom";

export default function MenuPage() {
  const { state } = useLocation();
  console.log(state);

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

                    <button>Add to Cart</button>
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
