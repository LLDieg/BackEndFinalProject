import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import DBconnection from "./config/index.js";
import usersRouters from "./Router/usersRouters.js";
import ordersRouters from "./Router/ordersRouters.js";
import productsRouters from "./Router/productsRouters.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// connection
DBconnection();

// cors
app.use(cors({ origin: "http://localhost:5173", exposedHeaders: ["tokens"] }));
// app.use(cors({origin: "http://127.0.0.1:5173", exposedHeaders:["tokens"]}));


// routers
app.use("/api/users", usersRouters);
app.use("/api/products", productsRouters);
app.use("/api/orders", ordersRouters);

// handle page not found
app.use((req, res, next) => {
  res.status(404).send({ msg: "page not found" });
});

// handle errors
app.use((error, req, res, next) => {
  res.status(error.status || 500).send(error.message || "something went wrong");
});

// listen port
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("the server is running on port", PORT);
});
