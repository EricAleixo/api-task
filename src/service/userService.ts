import { User } from "@prisma/client";
import { createUser, deleteUser, getAllUser } from "../repository/userRepository";
import { hash } from "bcryptjs";


export const getAllUserService = async () => {
    return await getAllUser();
}

export const createUserService = async (user: User) => {

    const hashedPassword = await hash(user.password, 10);

    user.password = hashedPassword;

    return await createUser(user);
}

export const deleteUserService = async (id: string) => {
    return await deleteUser(id);
}