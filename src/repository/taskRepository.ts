import { PrismaClient, Task } from "@prisma/client";
import { TaskResponse } from "../types/Task";

const prisma = new PrismaClient();

export const getAllTasks = async () => {
  return await prisma.task.findMany();
};

export const postTask = async (task: TaskResponse) => {
  const data = await prisma.task.create({
    data: {
      title: task.title,
      description: task.description,
      status: task.status,
      data_vencimento: task.data_vencimento,
      userID: task.userID
    }
  });
  return data;
}

export const putTask = async (id: number, taskUpdate: Task) => {

  const taskUpdated = await prisma.task.update({
    where: {
      id: id
    },
    data: {
      title: taskUpdate.title,
      description: taskUpdate.description,
      status: taskUpdate.status,
      data_vencimento: taskUpdate.data_vencimento
    }
  })

  return taskUpdated;
}

export const deleteTask = async (id: number) => {

  const taskId = id;

  await prisma.task.delete({
    where: {
      id: taskId
    }
  })
  return taskId;
}