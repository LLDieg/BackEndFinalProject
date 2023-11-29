import { Schema, model } from "mongoose";

const ProductsSchema = new Schema({
  restaurantName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
  rating: { type: Number, required: true },
  image_url: { type: String, required: true }, 
  dishes: [
    {
      dishName: { type: String, required: true },
      ingredients: { type: [String], required: true },
      price: { type: Number, required: true },
      image_url: { type: String, required: true },
      
    },
  ],
});

const ProductsModel = model("Products", ProductsSchema);

export default ProductsModel;
