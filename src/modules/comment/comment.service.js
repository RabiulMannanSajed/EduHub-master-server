import { Comment } from "./comment.model.js";

// Create a new comment
export const createCommentInDB = async (commentInfo) => {
  const newComment = await Comment.create(commentInfo);
  return newComment;
};

// Get all comments
export const getAllCommentsFromDB = async () => {
  const comments = await Comment.find().populate("userId").populate("postId");
  return comments;
};

// Get comments by postId
export const getCommentsByPostId = async (postId) => {
  const comments = await Comment.find({ postId })
    .populate("userId")
    .sort({ createdAt: -1 }); // Most recent first
  return comments;
};

// Delete a comment by its ID
export const deleteCommentById = async (commentId) => {
  const deleted = await Comment.findByIdAndDelete(commentId);
  return deleted;
};
