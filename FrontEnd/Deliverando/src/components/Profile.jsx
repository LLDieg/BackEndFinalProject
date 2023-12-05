import React, { useState, useEffect } from "react";
import BASE_URL from "../config/urlConfig";

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
          console.log("Your data has been successfully updated", res);
          setIsUpdated(true);
        })
        .catch((error) => {
          console.error("Update Error:", error);
        });

      console.log("After update fetch:", formData);
    } else {
      console.log("not autorized");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      {user._id ? (
        <>
          <h1>Hi {user.firstName}</h1>
          <div>
            <h2>Your personal data</h2>
            <p>First name: {user?.firstName}</p>
            <p>Last name: {user?.lastName}</p>
            <p>Email: {user?.email}</p>
          </div>
          <div>
            <h2>Your orders</h2>
            {user.orders.length > 0 ? (
              <ul>
                {user?.orders.map((order, index) => (
                  <li key={index}>{order}</li>
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
    </>
  );
}
