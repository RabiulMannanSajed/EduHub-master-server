import express from "express";
import { createLike, getLikesForPost, removeLike } from "./like.controller.js";

const route = express.Router();

// Create a like (user likes a post)
route.post("/create-like", createLike);

// Remove a like (user unlikes a post)
route.delete("/likes/:postId", removeLike);

// Get all likes for a specific post
route.get("/likes/:postId", getLikesForPost);

export const LikeRouter = route;
