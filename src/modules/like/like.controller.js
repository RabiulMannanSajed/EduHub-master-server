import {
  countLikesForPost,
  createLikeIntoDB,
  getLikesByPostId,
  removeLikeFromDB,
} from "./like.service.js";

// Create Like
export const createLike = async (req, res, next) => {
  try {
    const { userId, postId } = req.body;

    const { created, like } = await createLikeIntoDB({ userId, postId });
    const totalLikes = await countLikesForPost(postId);

    res.status(200).json({
      success: true,
      message: created
        ? "Post liked successfully"
        : "You have already liked this post",
      data: like,
      totalLikes,
    });
  } catch (error) {
    next(error);
  }
};

// Remove Like
export const removeLike = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const { postId } = req.params;

    const result = await removeLikeFromDB({ userId, postId });

    if (result) {
      return res.status(200).json({
        success: true,
        message: "Like removed successfully",
      });
    }

    res.status(404).json({
      success: false,
      message: "Like not found",
    });
  } catch (error) {
    next(error);
  }
};

// Get All Likes for a Post
export const getLikesForPost = async (req, res, next) => {
  try {
    const { postId } = req.params;

    const likes = await getLikesByPostId(postId);
    const totalLikes = await countLikesForPost(postId);

    res.status(200).json({
      success: true,
      message: "Likes retrieved successfully",
      totalLikes,
      data: likes,
    });
  } catch (error) {
    next(error);
  }
};
