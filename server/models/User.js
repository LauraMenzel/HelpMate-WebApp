import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    image: String,
    age: String,
    city: String,
    phonenumber: String,
    language: String,
    intro: String,
    helpoffers: String,
    verified: {
      Boolean,
      default: false,
    },
  },
  { timeStamps: true }
);

export default mongoose.model("User", userSchema);
