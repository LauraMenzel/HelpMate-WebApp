import mongoose from "mongoose";
const { Schema } = mongoose;

const NeedAHelpSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.String,
      ref: "User",
      required: true,
    },
    author: {
      type: String,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    helper: {
      type: String,
    },
  },
  { timeStamps: true }
);
export default mongoose.model("NeedAHelp", NeedAHelpSchema);
