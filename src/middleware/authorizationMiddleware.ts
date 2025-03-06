import { NextFunction, Response } from "express"
import { AuthUserRequest } from "../types/AuthUser"
import { StatusCodes } from "http-status-codes"

export const authorizationRole = (allowedRolles: string[]) =>{
    return (req: AuthUserRequest, res: Response, next: NextFunction) =>{
        if(!req.user){
            res.status(StatusCodes.NOT_FOUND).json({
                error: "Usuário não encontrado"
            })
            return;
        }

        if(!allowedRolles.includes(req.user?.role)){
            res.status(StatusCodes.FORBIDDEN).json({
                error: "Permissões insuficientes"
            })
            return
        }

        next();
    }
}