import React, { useState, useEffect } from "react";
import BASE_URL from "../config/urlConfig";
import "../style/profile.css";


export default function Profile() {
  const [user, setUser] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    orders: [],
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch(`${BASE_URL}/api/users/verifytoken`, {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setUser(result.data);
          setFormData({
            firstName: result.data.firstName,
            lastName: result.data.lastName,
            email: result.data.email,
          });
        })
        .catch((error) => {
          console.error("Fetch Error:", error);
        });
    } else {
      console.log("Token not available. User not authenticated.");
    }
  }, []);

  const handleUpdateProfile = () => {
    const token = localStorage.getItem("token");
    console.log("Before update fetch:", formData);

    if (token) {
      fetch(`${BASE_URL}/api/users/update/${user._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (!res.ok) {            
            throw new Error("Update failed", res);
          }
          setIsUpdated(true);
        })
        .catch((error) => {
          console.error("Update Error:", error);
        });

    
    } else {
      console.log("not autorized");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="profile">
      
      {user._id ? (
        <>
          <h1>
            Hi <span>{user.firstName}</span>{" "}
          </h1>
          <div>
            <h2>Your personal data</h2>
            <p>
              {" "}
              <span>First name:</span> {user?.firstName}
            </p>
            <p>
              {" "}
              <span>Last name:</span> {user?.lastName}
            </p>
            <p>
              {" "}
              <span>Email:</span> {user?.email}
            </p>
          </div>
          <div>
            <h2>Your orders</h2>
            {user.orders.length > 0 ? (
              // <ul className="orders">
              //   {user?.orders.map((order, index) => (
              //     <div key={index}>
              //       <img src={order.image_url} alt="dish img" />
              //       <li> {order.dishName}</li>
              //       <li>{order.price}</li>
              //     </div>
              //   ))}
              // </ul>
              <ul>
                {user?.orders.map((order, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0px",
                      heigth: "20px",
                    }}
                  >
                    <img
                      src={order.image_url}
                      alt="dish img"
                      style={{
                        width: "100px",
                        borderRadius: "5px",
                        marginRight: "10px",
                      }}
                    />
                    <div>
                      <p
                        style={{
                          margin: "5px 0",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ marginRight: "10px" }}>
                          {order.dishName}
                        </span>
                        <span>€ {order.price}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </ul>
            ) : (
              <p>You haven't placed an order yet</p>
            )}
          </div>
          <div>
            <h2>Update your data</h2>
            <form>
              <label>
                First name:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Last name:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <button type="button" onClick={handleUpdateProfile}>
                Update
              </button>
            </form>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
