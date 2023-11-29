import OrderModel from "../models/ordersSchema.js";
import UserModel from "../models/usersSchema.js";

// Get all orders
export const getAllOrders = async (req, res, next) => {
  try {
    const allOrders = await OrderModel.find().populate(
      "products",
      "restaurantName dishName price"
    );
    res.send(allOrders);
  } catch (error) {
    next(error);
  }
};

// Get single order
export const getSingleOrder = async (req, res, next) => {
  try {
    const singleOrder = await OrderModel.findById(req.params.id)
      .populate("products", "restaurantName dishName price")
      .populate("userId", "-_id -password -email");
    res.status(200).send(singleOrder);
  } catch (error) {
    next(error);
  }
};

// Get single order by userId
export const getSingleOrderByUserId = async (req, res, next) => {
  try {
    const singleOrderById = await OrderModel.find({ userId: req.params.id })
      .populate("products", "restaurantName dishName price")
      .populate("userId", "-_id -password -email");
    res.send(singleOrderById);
  } catch (error) {
    next(error);
  }
};

//* create
export const createOrder = async (req, res, next) => {
  try {
    const order = await OrderModel.create(req.body);
    const upadatedUser = await UserModel.findByIdAndUpdate(
      req.user._id,
      { $push: { orders: order._id } },
      { new: true }
    );
    res.send(upadatedUser);
  } catch (err) {
    next(err);
  }
};

//*  Update
export const updateOrder = async (req, res, next) => {
  try {
    const order = await OrderModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(203).send(order);
  } catch (error) {
    next(error);
  }
};

//* Delete
export const deleteOrder = async (req, res, next) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.status(204).send({ msg: "Order deleted successfully" });
  } catch (error) {
    next(error);
  }
};
