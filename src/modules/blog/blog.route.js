import { Router } from "express";
import { createBlog, getAllBlog } from "./blog.controller.js";

const route = Router();

route.post("/create-post", createBlog);

route.get("/get-all-post", getAllBlog);

export const BlogRouter = route;
