import { Schema, model } from "mongoose";

const JobSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    jobName: {
      type: String,
      required: true,
      trim: true,
    },
    companyLogo: {
      type: String,
      trim: true,
    },
    location: [
      {
        type: String,
        trim: true,
      },
    ],
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: String,
      trim: true,
    },
    stipend: {
      type: String,
      trim: true,
    },
    startDate: {
      type: String,
      trim: true,
    },
    experience: {
      type: String,
      trim: true,
    },
    workFrom: {
      type: String,
      trim: true,
    },
    aboutTheWork: {
      type: String,
      trim: true,
    },
    skill: [
      {
        type: String,
        trim: true,
      },
    ],
    whoApply: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

export const Job = model("Job", JobSchema);
