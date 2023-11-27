import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
    products: [{type:Schema.Types.ObjectId, ref:"Products"}],   // ref: connection with with products collection. 
    totalPrice: {type: Number, required: true},
    userId: {type: Schema.Types.ObjectId,ref:"User" ,required: true},
  });

  const OrderModel = model("Order", OrderSchema);

  export default OrderModel; 