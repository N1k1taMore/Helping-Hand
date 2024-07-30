import mongoose from "mongoose";
const { Schema } = mongoose;

const itemSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  items: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
},{
  timestamps:true
});

export default mongoose.model("Item", itemSchema)