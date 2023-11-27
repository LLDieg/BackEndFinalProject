import { Schema, model } from "mongoose";

const usersSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  role: { type: String, enum: ["admin", "user"], default: "user" },
});

const UserModel = model("User", usersSchema);

export default UserModel;
