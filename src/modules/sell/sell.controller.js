import { createSellIntoDB } from "./sell.services.js";

export const createUser = async (req, res, next) => {
  try {
    const userInfo = req.body;
    const result = await createSellIntoDB(userInfo);
    res.status(200).json({
      success: true,
      message: "Students is are retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
