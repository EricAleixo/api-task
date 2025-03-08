import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUser = async () => {
    return await prisma.user.findMany({
        include: {
            tasks: true
        }
    });
}

export const createUser = async (user: User) => {

    const data = prisma.user.create({
        data: {
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        }
    });

    return data;
}

export const putUser = async (id: string, userUpdated: User) => {

    return await prisma.user.update({
        where: {
            id: id
        }, data: {
            name: userUpdated.name,
            email: userUpdated.email,
            password: userUpdated.password,
            role: userUpdated.role
        }
    })

}

export const deleteUser = async (id: string) => {

    return await prisma.user.delete({
        where: {
            id: id
        }
    })

}