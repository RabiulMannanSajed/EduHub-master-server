import { Like } from "./like.model.js";

export const createLikeIntoDB = async ({ userId, postId }) => {
  // Try to find if this like already exists
  const existingLike = await Like.findOne({ userId, postId });

  if (existingLike) {
    // Already liked
    return { created: false, like: existingLike };
  }

  const newLike = await Like.create({ userId, postId });
  return { created: true, like: newLike };
};

export const removeLikeFromDB = async ({ userId, postId }) => {
  const result = await Like.findOneAndDelete({ userId, postId });
  return result;
};

export const getLikesByPostId = async (postId) => {
  const likes = await Like.find({ postId });
  return likes;
};

export const countLikesForPost = async (postId) => {
  const count = await Like.countDocuments({ postId });
  return count;
};
