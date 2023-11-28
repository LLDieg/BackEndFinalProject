import express from "express";

import {
  deleteOrder,
  getAllOrders,
  updateOrder,
  createOrder,
  getSingleOrder,
  getSingleOrderByUserId,
} from "../Controller/ordersController.js";
import { auth } from "../middleware/autorization.js";
import { isAdmin } from "../middleware/isAdmin.js";

const router = express.Router();

router.get("/getorderByUserId/:id", auth, getSingleOrderByUserId);
router.get("/singleOrder/:id", auth, getSingleOrder);
router.get("/allOrders", auth, isAdmin, getAllOrders);

router.post("/create", auth, createOrder);
router.patch("/update/:id", auth, updateOrder);
router.delete("/delete/:id", auth, deleteOrder);

export default router;
