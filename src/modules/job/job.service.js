import { Job } from "./job.model.js";

export const createJobIntoDB = async (messageInfo) => {
  const newMessage = await Job.create(messageInfo);
  return newMessage;
};

export const getAllJobFromDB = async () => {
  const items = await Job.find();
  return items;
};
