import { Freelance } from "./freelancing.model.js";

export const createFreelanceIntoDB = async (sellData) => {
  const newFreelance = await Freelance.create(sellData);
  return newFreelance;
};

export const getAllFreelanceFormDB = async () => {
  const items = await Freelance.find();
  return items;
};
