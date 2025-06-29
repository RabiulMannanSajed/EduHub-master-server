import { Schema, model } from "mongoose";

const JobApplicationSchema = new Schema(
  {
    // Reference to the User applying
    applicantID: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Reference to the Job
    jobID: {
      type: Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    // Optional message or cover letter
    message: {
      type: String,
      trim: true,
    },
    // Optional resume URL (e.g., link to a file upload or Google Drive)
    resumeUrl: {
      type: String,
      trim: true,
    },
    // Application status (optional)
    status: {
      type: String,
      enum: ["Pending", "Reviewed", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

export const JobApplication = model("JobApplication", JobApplicationSchema);
