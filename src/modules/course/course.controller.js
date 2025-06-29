import {
  createCoursesSellIntoDB,
  getAllCorsesItemFormDB,
} from "./course.services.js";

export const CreateCourseSellPost = async (req, res, next) => {
  try {
    const userInfo = req.body;
    const result = await createCoursesSellIntoDB(userInfo);
    res.status(200).json({
      success: true,
      message: "Sell post updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCourse = async (req, res, next) => {
  try {
    const result = await getAllCorsesItemFormDB();
    res.status(200).json({
      success: true,
      message: "All books get successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
