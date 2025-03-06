import { login } from "../repository/authRepository";
import { AuthUser } from "../types/AuthUser";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginService = async (authUser: AuthUser) => {
    const user = await login(authUser);
    const SECRET = process.env.SECRET_KEY

    if (!user) {
        throw new Error("Usuário não existente");
    }

    const passwordMatched = await compare(authUser.password, user.password);

    if (!passwordMatched) {
        throw new Error("Senhas diferentes")
    }

    if (SECRET) {
        const data = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }
        const token = jwt.sign(data, SECRET)
        return token;
    }

}