import { Task } from "@prisma/client";

export interface TaskResponse extends Task {
    id?: string
}