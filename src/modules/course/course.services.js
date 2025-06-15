import { Course } from "./course.model.js";

export const createCoursesSellIntoDB = async (sellData) => {
  const newSellCourse = await Course.create(sellData);
  return newSellCourse;
};

export const getAllCorsesItemFormDB = async () => {
  const course = await Course.find();
  return course;
};
