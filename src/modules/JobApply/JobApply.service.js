import { JobApplication } from "./JobApply.model.js";

export const createJobApplicationIntoDB = async (messageInfo) => {
  const newMessage = await JobApplication.create(messageInfo);
  return newMessage;
};

export const getAllJobApplicationFromDB = async () => {
  const items = await JobApplication.find();
  return items;
};
