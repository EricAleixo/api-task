import express from "express";
import { deleteTask, getTasks, postTask, putTask } from "../controller/taskController";
import { authenticateToken } from "../middleware/authMiddleware";

export const routerTask = express.Router();

routerTask.get("/task", authenticateToken ,getTasks);

routerTask.post("/task", authenticateToken, postTask);

routerTask.put("/task/:id",authenticateToken, putTask);

routerTask.delete("/task/:id", authenticateToken, deleteTask);