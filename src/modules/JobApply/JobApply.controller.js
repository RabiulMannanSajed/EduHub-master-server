import {
  createJobApplicationIntoDB,
  getAllJobApplicationFromDB,
} from "./JobApply.service.js";

export const createJobApplication = async (req, res, next) => {
  try {
    const BlogInfo = req.body;
    const result = await createJobApplicationIntoDB(BlogInfo);
    res.status(200).json({
      success: true,
      message: "Sell post updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllJobApplication = async (req, res, next) => {
  try {
    const result = await getAllJobApplicationFromDB();
    res.status(200).json({
      success: true,
      message: "All books get successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
