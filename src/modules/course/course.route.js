import { Router } from "express";

const route = Router();

route.post("/create-sell-courses", createSellPost);

route.get("/get-all-courses", getAllItems);

export const CourseRouter = route;
