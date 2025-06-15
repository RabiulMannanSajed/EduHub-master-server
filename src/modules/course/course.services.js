import { Course } from "./course.model";

export const createCoursesSellIntoDB = async (sellData) => {
  const newSellProduct = await Course.create(sellData);
  return newSellProduct;
};

export const getAllItemFormDB = async () => {
  const items = await Course.find();
  return items;
};
