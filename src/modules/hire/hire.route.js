import express from "express";
import {
  createHire,
  getAllHires,
  getHiresByHiringUser,
  getHiresByHiredUser,
} from "./hire.controller.js";

const route = express.Router();

route.post("/create-payment", createHire);
route.get("/get-all-payment", getAllHires);

route.get("/hiring-user/:hiringUserID", getHiresByHiringUser);
route.get("/hired-user/:userID", getHiresByHiredUser);
export const payment = route;
