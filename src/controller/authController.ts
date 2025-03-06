import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AuthUser } from "../types/AuthUser";
import { loginService } from "../service/authService";

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const authUser: AuthUser = {
            email: email,
            password: password,
        }
        const token = await loginService(authUser);
        res.status(StatusCodes.OK).json({
            message: authUser,
            token: token
        })
    }
    catch (e: any) {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: e.message
        })
    }
}