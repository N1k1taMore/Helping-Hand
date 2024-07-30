import mongoose from 'mongoose';
const { Schema } = mongoose;

const donationSchema = new Schema(
  {
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
      required: true,
    },
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
    acceptedBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Donation', donationSchema);
