import { model, Schema } from "mongoose";

const BlogSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  },
  caption: {
    type: String,
  },
  photoUrl: {
    type: String,
  },
});

export const Blog = model("blog", BlogSchema);
