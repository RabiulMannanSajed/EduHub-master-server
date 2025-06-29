import mongoose, { model, Schema } from "mongoose";

const orderSchema = new Schema({
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  billingAddress: {
    fullName: String,
    email: String,
    address: String,
    city: String,
    zip: String,
  },
  shippingAddress: {
    fullName: String,
    address: String,
    city: String,
    zip: String,
  },
  payment: {
    cardNumber: String,
    expiryDate: String,
    cvv: String,
  },
  orderSummary: {
    items: [
      {
        name: String,
        price: Number,
      },
    ],
    shippingCost: Number,
    totalAmount: Number,
  },
});

export const Order = model("Order", orderSchema);
