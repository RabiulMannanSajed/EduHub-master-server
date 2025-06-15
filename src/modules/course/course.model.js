import { Schema } from "mongoose";

const CourseSchema = new Schema({
  // add this when user perfectly
  // userID: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User", // Reference to the User model
  //   required: true,
  // },
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
});

export const Course = model("course", CourseSchema);
