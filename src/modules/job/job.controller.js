import { createJobIntoDB, getAllJobFromDB } from "./job.service.js";

export const createJob = async (req, res, next) => {
  try {
    const BlogInfo = req.body;
    const result = await createJobIntoDB(BlogInfo);
    res.status(200).json({
      success: true,
      message: "Sell post updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllJob = async (req, res, next) => {
  try {
    const result = await getAllJobFromDB();
    res.status(200).json({
      success: true,
      message: "All books get successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
