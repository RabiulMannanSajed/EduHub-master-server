import {
  createCommentInDB,
  getAllCommentsFromDB,
  getCommentsByPostId,
  deleteCommentById,
} from "./comment.service.js";

// Create a comment
export const createComment = async (req, res, next) => {
  try {
    const commentInfo = req.body;
    const result = await createCommentInDB(commentInfo);
    res.status(200).json({
      success: true,
      message: "Comment created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get all comments
export const getAllComments = async (req, res, next) => {
  try {
    const result = await getAllCommentsFromDB();
    res.status(200).json({
      success: true,
      message: "All comments fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get comments by postId
export const getCommentsByPost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const result = await getCommentsByPostId(postId);
    res.status(200).json({
      success: true,
      message: "Comments fetched for post",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a comment
export const deleteComment = async (req, res, next) => {
  try {
    const { commentId } = req.params;
    const result = await deleteCommentById(commentId);
    res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
