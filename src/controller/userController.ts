import { Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import { createUserService, deleteUserService, getAllUserService } from "../service/userService";


export const getUser = async (req: Request, res: Response) => {
    const users = await getAllUserService();
    res.status(StatusCodes.OK).json({
        message: users
    })
}

export const postUser = async (req: Request, res: Response) => {
    try {
        const user = await createUserService(req.body);
        res.status(StatusCodes.CREATED).json({
            message: user
        })
    } catch (e) {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: "Não foi possível salvar o usuário"
        })
    }
}

export const deleteUser = async (req: Request, res: Response) => {

    deleteUserService(req.params.id);

    res.status(StatusCodes.OK).json({
        message: "Usuário deletado com sucesso"
    })

}