import mongoose from "mongoose";

function DBconnection(){
    mongoose
  .connect(`${process.env.MONGODB_CONNECTION_STRING}`)
  .then(() => console.log("We connected to DB 😉"))
  .catch((err) => console.log(err));
}
export default DBconnection