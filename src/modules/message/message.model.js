import { model, Schema, Types } from "mongoose";

const messageSchema = new Schema(
  {
    fromID: {
      type: Types.ObjectId,
    },
    toID: {
      type: Types.ObjectId,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
export const Message = model("Message", messageSchema);
