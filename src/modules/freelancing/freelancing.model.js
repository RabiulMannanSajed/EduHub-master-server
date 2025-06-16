import { Schema } from "mongoose";

const FreelancingSchema = new Schema({
  workType: {
    type: String,
    trim: true,
  },
  workTitle: {
    type: String,
    trim: true,
  },
  workDetails: {
    type: String,
    trim: true,
  },
  workDateLine: {
    type: String,
    trim: true,
  },
  workPrice: {
    type: String,
    trim: true,
  },
});

export const Freelance = model("freelance", FreelancingSchema);
