import ProductsModel from "../models/productsSchema.js";

//* Get all products
export const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await ProductsModel.find();
    res.send(allProducts);
  } catch (error) {
    next(error);
  }
};

//* Get single product
export const getSingleProduct = async (req, res, next) => {
  try {
    const singleProduct = await ProductsModel.findById(req.params.id);
    res.status(200).send(singleProduct);
  } catch (error) {
    next(error);
  }
};

//* create
export const createProduct = async (req, res) => {
  try {
    const product = await ProductsModel.create(req.body);
    res.send(product);
  } catch (error) {
    console.log(error.message);
  }
};

//*  Update
export const updateProduct = async (req, res, next) => {
  try {
    const product = await ProductsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(203).send(product);
  } catch (error) {
    next(error);
  }
};

//* Delete
export const deleteProduct = async (req, res, next) => {
  try {
    await ProductsModel.findByIdAndDelete(req.params.id);
    res.status(204).send({ msg: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};
