import express from "express";
import { routerTask } from "./taskRouter";
import { routerUser } from "./userRouter";
import { routerAuth } from "./authRouter";

export const router = express.Router();

router.use(routerTask);
router.use(routerUser);
router.use(routerAuth);
