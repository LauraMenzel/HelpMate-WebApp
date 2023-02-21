import mongoose from "mongoose";
const { Schema } = mongoose;

const NeedAHelpSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
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
  },
  { timeStamps: true }
);
export default mongoose.model("NeedAHelp", NeedAHelpSchema);
