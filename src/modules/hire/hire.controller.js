import {
  createHireInDB,
  getAllHiresFromDB,
  getHiresByHiringUserId,
  getHiresByHiredUserId,
} from "./hire.service.js";

/**
 * Create a new Hire
 */
export const createHire = async (req, res, next) => {
  try {
    const hireInfo = req.body;
    const result = await createHireInDB(hireInfo);
    res.status(201).json({
      success: true,
      message: "Hire record created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all Hire records
 */
export const getAllHires = async (req, res, next) => {
  try {
    const result = await getAllHiresFromDB();
    res.status(200).json({
      success: true,
      message: "All hires fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get hires by hiring user ID
 */
export const getHiresByHiringUser = async (req, res, next) => {
  try {
    const { hiringUserID } = req.params;
    const result = await getHiresByHiringUserId(hiringUserID);
    res.status(200).json({
      success: true,
      message: "Hires fetched for hiring user",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get hires by hired user ID
 */
export const getHiresByHiredUser = async (req, res, next) => {
  try {
    const { userID } = req.params;
    const result = await getHiresByHiredUserId(userID);
    res.status(200).json({
      success: true,
      message: "Hires fetched for hired user",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
