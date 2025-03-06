import express from "express";
import { deleteUser, getUser, postUser } from "../controller/userController";
import { authenticateToken } from "../middleware/authMiddleware";
import { authorizationRole } from "../middleware/authorizationMiddleware";
import { UserRole } from "@prisma/client";

export const routerUser = express.Router();

routerUser.get("/users", authenticateToken, authorizationRole([UserRole.ADMIN]), getUser);

routerUser.post("/users", authenticateToken, authorizationRole([UserRole.ADMIN]), postUser);

routerUser.delete("/users/:id", authenticateToken, authorizationRole([UserRole.ADMIN]), deleteUser);