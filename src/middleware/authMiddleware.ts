import { Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes";
import { AuthUserRequest } from "../types/AuthUser";
import jwt from 'jsonwebtoken';

export const authenticateToken = (req: AuthUserRequest, res: Response, next: NextFunction) => {

    const authHeader = req.headers["authorization"]

    if (!authHeader) {
        res.status(StatusCodes.NOT_FOUND).json({
            error: "Token não encontrado"
        })
        return;
    }

    const token = authHeader.split(" ")[1];

    try {
        const SECRET = process.env.SECRET_KEY;
        if (!SECRET) {
            throw new Error("Chave secreta não definida");
        }
        const decoded = jwt.verify(token, SECRET) as AuthUserRequest["user"];
        req.user = decoded;
        next();
    }
    catch (e) {
        res.status(StatusCodes.BAD_REQUEST).json({
            error: "Token inválido ou inspirado"
        })
    }

}