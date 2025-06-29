import { Router } from "express";
import {
  createComment,
  deleteComment,
  getAllComments,
  getCommentsByPost,
} from "./commernt.controller.js";

const route = Router();

// Create a new comment
route.post("/create-comment ", createComment);

// Get all comments
route.get("/get-All-Comments", getAllComments);

// Get comments by postId
route.get("/post/:postId", getCommentsByPost);

// Delete comment by commentId
route.delete("/:commentId", deleteComment);

export const CommentRouter = route;
