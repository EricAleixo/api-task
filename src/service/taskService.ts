import { Task } from "@prisma/client";
import { deleteTask, getAllTasks, postTask, putTask } from "../repository/taskRepository";
import { TaskResponse } from "../types/Task";

export const getAllTasksService = async () => {
  return await getAllTasks();
};

export const postTaskService = async (task:TaskResponse) =>{
  return await postTask(task);
};

export const putTaskService = async (id: number, taskUpdate:Task) =>{
  return await putTask(id, taskUpdate);
}

export const deleteAllService = async (id: number) =>{
  return await deleteTask(id);
}