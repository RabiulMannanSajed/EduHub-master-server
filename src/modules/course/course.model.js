import { model, Schema } from "mongoose";

const CourseSchema = new Schema({
  // add this when user perfectly
  userID: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
    min: 0,
  },
  hour: {
    type: String,
    required: true,
  },
  courseImage: {
    type: String,
  },
  meet: {
    type: String,
  },
  videos: [
    {
      video: { type: String, required: true },
      min: { type: String, required: true },
    },
  ],
});

export const Course = model("course", CourseSchema);
