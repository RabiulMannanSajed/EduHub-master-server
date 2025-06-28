import { createBlogIntoDB, getAllBlogFromDB } from "./blog.service.js";

export const createBlog = async (req, res, next) => {
  try {
    const BlogInfo = req.body;
    const result = await createBlogIntoDB(BlogInfo);
    res.status(200).json({
      success: true,
      message: "Sell post updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllBlog = async (req, res, next) => {
  try {
    const result = await getAllBlogFromDB();
    res.status(200).json({
      success: true,
      message: "All books get successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
