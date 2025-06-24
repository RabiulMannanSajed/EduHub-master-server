import { Router } from "express";
import { CreateCourseSellPost, getAllCourse } from "./course.controller.js";

const route = Router();

route.post("/create-sell-courses", CreateCourseSellPost);

route.get("/get-all-courses", getAllCourse);

export const CourseRouter = route;
