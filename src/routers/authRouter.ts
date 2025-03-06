import express from "express";
import { login } from "../controller/authController";

export const routerAuth = express.Router();

routerAuth.post("/auth", login)