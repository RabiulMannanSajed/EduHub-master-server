import { Router } from "express";
import {
  createJobApplication,
  getAllJobApplication,
} from "./JobApply.controller.js";

const route = Router();

route.post("/create-jobApplication", createJobApplication);

route.get("/get-all-jobApplication", getAllJobApplication);

export const JObApplicationRouter = route;
