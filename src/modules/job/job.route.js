import { Router } from "express";
import { createJob, getAllJob } from "./job.controller.js";

const route = Router();

route.post("/create-job", createJob);

route.get("/get-all-job", getAllJob);

export const JObRouter = route;
