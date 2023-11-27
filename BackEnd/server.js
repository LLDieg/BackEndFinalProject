import express from "express";
import dotenv from "dotenv";
import DBconnection from "./config/index.js";

dotenv.config(); //with .config= we are using dotenv and we need it to use the secure data

const app = express(); //express allows us to create routes, handle error

app.use(express.json()); // use express to read the json file

//CONNECTION
DBconnection();


//ROUTHERS
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", orderRouter);

// HANDLE PAGE NOT FOUND
app.use((req, res, next) => {
  res.status(404).send("page not found");
});

// HANDLE ERRORS
app.use((error, req, res, next) => {
  res.status(error.status || 500).send(error.message || "something went wrong");
});

//LISTEN PORT
const PORT = process.env.PORT; // in a very secure way(using process.env) to give PORT in server the port number
app.listen(PORT, () => {
  console.log("the server is running on port", PORT);
});
