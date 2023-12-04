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
  useEffect(() => {
    fetch(`${BASE_URL}/api/users/singleUser/${user._id}`)
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleUpdateProfile = () => {
    fetch(`${BASE_URL}/api/users/update/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Update failed");
        }
        console.log("Your data has been successfully updated"); //!! add pop-up ?
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  return (
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
              value={user.firstName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Last name:
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
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
  );
}