import { Router } from "express";
import { createSellPost } from "./sell.controller.js";

const route = Router();

route.post("/create-sell-post", createSellPost);

export const SellRouter = route;
