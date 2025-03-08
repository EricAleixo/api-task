import { User } from "@prisma/client";
import { createUser, deleteUser, getAllUser, putUser } from "../repository/userRepository";
import { hash } from "bcryptjs";


export const getAllUserService = async () => {
    return await getAllUser();
}

export const createUserService = async (user: User) => {

    const hashedPassword = await hash(user.password, 10);

    user.password = hashedPassword;

    return await createUser(user);
}

export const updateUserService = async (id: string, userUpdated: User) => {
    return await putUser(id, userUpdated);
}

export const deleteUserService = async (id: string) => {
    return await deleteUser(id);
}