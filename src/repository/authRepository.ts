import { PrismaClient, User } from "@prisma/client";
import { AuthUser } from "../types/AuthUser";

export const login = async (authUser: AuthUser) => {

    const prisma = new PrismaClient();

    const user: User | null = await prisma.user.findUnique({
        where: {
            email: authUser.email,
        }
    })

    return user;

}