import { Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import { createUserService, deleteUserService, getAllUserService, updateUserService } from "../service/userService";
import { User } from "@prisma/client";


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

export const putUser = async (req:Request, res: Response) => {

    try{
        const id = req.params.id
        const { name , email, password, role} = req.body;
        const userUpdated: User = {
            id: id,
            name: name,
            email: email,
            password: password,
            role: role
        }

        const userUpdate = await updateUserService(id, userUpdated)

        res.status(StatusCodes.ACCEPTED).json({
            message: userUpdate
        });
        
    }catch (e){
        res.status(StatusCodes.BAD_REQUEST).json({
            message: "Não foi possível atualizar o usuário"
        })
    }

}

export const deleteUser = async (req: Request, res: Response) => {

    deleteUserService(req.params.id);

    res.status(StatusCodes.OK).json({
        message: "Usuário deletado com sucesso"
    })

}