import {
  createFreelanceIntoDB,
  getAllFreelanceFormDB,
} from "./freelancing.service.js";

export const createFreelancing = async (req, res, next) => {
  try {
    const userInfo = req.body;
    const result = await createFreelanceIntoDB(userInfo);
    res.status(200).json({
      success: true,
      message: "Sell post updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllFreelancing = async (req, res, next) => {
  try {
    const result = await getAllFreelanceFormDB();
    res.status(200).json({
      success: true,
      message: "All books get successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
