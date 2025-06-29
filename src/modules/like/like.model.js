import { model, Schema } from "mongoose";

const likeSchema = new Schema(
  {
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

// Ensure a user can like a post only once
likeSchema.index({ postId: 1, userId: 1 }, { unique: true });

export const Like = model("like", likeSchema);
