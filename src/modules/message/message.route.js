import { Router } from "express";
import { createMessage, getAllMessage } from "./message.controller.js";

const route = Router();

route.post("/create-message", createMessage);

route.get("/get-all-messages", getAllMessage);

export const MessageRouter = route;
