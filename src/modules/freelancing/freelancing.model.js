import { model, Schema } from "mongoose";

const FreelancingSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  },
  workType: {
    type: String,
    trim: true,
  },

  bio: {
    type: String,
  },

  workTitle: {
    type: String,
    trim: true,
  },

  workDetails: {
    type: String,
    trim: true,
  },

  workPrice: {
    type: String,
    trim: true,
  },
});

export const Freelance = model("freelance", FreelancingSchema);
