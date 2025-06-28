import { Message } from "./message.model.js";

export const createMessageIntoDB = async (messageInfo) => {
  const newMessage = await Message.create(messageInfo);
  return newMessage;
};

export const getAllMessageFromDB = async () => {
  const items = await Message.find();
  return items;
};
