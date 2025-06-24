import { Router } from "express";
import {
  createFreelancing,
  getAllFreelancing,
} from "./freelancing.controller.js";

const route = Router();

route.post("/create-Freelancer", createFreelancing);

route.get("/get-all-Freelancer", getAllFreelancing);

export const FreelancerRoutes = route;
