import { Request } from "express"

export type AuthUser = {
    email: string,
    password: sring,
}

export interface AuthUserRequest extends Request {
    user?:{
        id: string,
        nome: string,
        email: string,
        role: string
    } 
}