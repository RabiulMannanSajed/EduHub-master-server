import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "worker", "manager"],
      default: "worker",
    },
    password: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    workingList: [
      {
        type: Schema.Types.ObjectId,
        ref: "WorkItem", // This assumes your work model is named "WorkItem"
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = model("User", userSchema);
