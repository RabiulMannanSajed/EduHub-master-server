import { Blog } from "./blog.model.js";

export const createBlogIntoDB = async (messageInfo) => {
  const newMessage = await Blog.create(messageInfo);
  return newMessage;
};

export const getAllBlogFromDB = async () => {
  const items = await Blog.find();
  return items;
};
