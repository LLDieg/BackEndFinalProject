import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  loginUser,
  register,
  updateUser,
} from "../Controller/usersController.js";

import { auth } from "../middleware/autorization.js";
import { isAdmin } from "../middleware/isAdmin.js";
import { userRegisterValidation } from "../middleware/validation.js";

const router = Router();

router.post("/register", userRegisterValidation, register);
router.post("/login", loginUser);

router.patch("/update/:id", auth, isAdmin, updateUser);
router.delete("/delete/:id", auth, isAdmin, deleteUser);

router.get("/allUsers", auth, isAdmin, getAllUsers);


router.get('/verifytoken', auth, (req, res)=>{
    res.send({succes:true, data:req.user})  //releted to frontend Container.jsx
  })
  

export default router;
