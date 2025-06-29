import { Order } from "./hire.model.js";

/**
 * Create a new Hire record
 */
export const createHireInDB = async (hireInfo) => {
  const newHire = await Order.create(hireInfo);
  return newHire;
};

/**
 * Get all Hire records
 */
export const getAllHiresFromDB = async () => {
  const hires = await Order.find();

  return hires;
};

/**
 * Get all Hire records by the hiring user
 */
export const getHiresByHiringUserId = async (hiringUserID) => {
  const hires = await Order.find({ hiringUserID });

  return hires;
};

/**
 * Get all Hire records by the hired user
 */
export const getHiresByHiredUserId = async (userID) => {
  const hires = await Order.find({ userID });
  return hires;
};
