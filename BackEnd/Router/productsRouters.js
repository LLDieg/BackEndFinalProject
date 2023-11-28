import { Router } from "express";

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../Controller/productsController.js";
import { auth } from "../middleware/autorization.js";
import { isAdmin } from "../middleware/isAdmin.js";

const router = Router();

router.get("/singleProduct/:id", getSingleProduct);
router.get("/allProducts", getAllProducts);

router.post("/create", auth, isAdmin, createProduct);
router.patch("/update/:id", auth, isAdmin, updateProduct);
router.delete("/delete/:id", auth, isAdmin, deleteProduct);

export default router;
