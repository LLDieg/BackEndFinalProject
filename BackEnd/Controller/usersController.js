import UserModel from "../models/usersSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// register
export const register = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await UserModel.create({
      ...req.body, //line 12 and 13, we are breaking up the user body and the password is replaced with the hashedPassword
      password: hashedPassword,
    });

    res.status(200).send(newUser);
  } catch (error) {
    next(error);
  }
};

//* login
export const loginUser = async (req, res, next) => {
  try {
    const foundUser = await UserModel.findOne({ email: req.body.email }); // we find user with the mail
    if (foundUser) {
      const check = await bcrypt.compare(req.body.password, foundUser.password); // we compare to the hashpassword

      if (check) {
        //if check is true
        //  jwt.sign              (  payload,                                secretkey,             optional part,   )
        const token = jwt.sign(
          { _id: foundUser._id, email: foundUser.email },
          process.env.SECRET_KEY,
          { issuer: "Deliverando", expiresIn: "5h" }
        );
        res.header("token", token).send({ msg: "welcome back", foundUser }); //it must be written this way otherwise is difficult to work in the frontend)
      } else {
        res.status(401).send({success: false, msg: "password doesn't match!" });
      }
    }else{
      res.send({success: false,  msg: "The email or password is incorrect" });
    }
    
  } catch (error) {
    next(error);
  }
};

//updating
export const updateUser = async (req, res, next) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(203).send(user);
  } catch (error) {
    next(error);
  }
};

//delete
export const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const deleteUser = await UserModel.findByIdAndDelete(userId);
    res.send(deleteUser);
  } catch (error) {
    next(error);
  }
};

//get all Users

export const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await UserModel.find();
    res.send(allUsers);
  } catch (error) {
    next(error);
  }
};

//get single user by id
export const getSingleUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).send({ success: false, msg: "User not found" });
    }
    res.send(user);
  } catch (error) {
    next(error);
  }
};