import { Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import { deleteAllService, getAllTasksService, postTaskService, putTaskService } from "../service/taskService";
import { TaskResponse } from "../types/Task";
import { Task } from "@prisma/client";
import { AuthUserRequest } from "../types/AuthUser";

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await getAllTasksService()
  res.status(StatusCodes.OK).json({
    message: tasks,
  });
};

export const postTask = async (req: AuthUserRequest, res: Response) => {
  try{
    const { title, description, status, data_vencimento } = req.body;
    const newTask: TaskResponse = {
      title: title,
      description: description,
      status: status,
      data_vencimento: data_vencimento,
      userID: req.user?.id || " "
    }
    const taskSaved = await postTaskService(newTask);
    res.status(StatusCodes.CREATED).json({
      message: newTask,
    });
  }catch(e){
    res.status(StatusCodes.BAD_REQUEST).json({
      message: "Erro ao salvar a mensagem, verifique se todos os atributos estão presentes"
    })
  }
};

export const putTask = async (req: Request, res: Response) => {

  const taskId = Number(req.params.id);
  const taskUpdate: Task = req.body

  try {
    const taskUpdated = await putTaskService(taskId, taskUpdate);
    res.status(StatusCodes.ACCEPTED).json({
      message: `Tarefa atualizada com sucesso ${taskUpdated}`
    })
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: "Erro ao atualizar",
    })
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);

  try {
    const idDeletado = await deleteAllService(taskId);
    res.status(StatusCodes.OK).json({
      message: `Tarefa do id ${idDeletado} deletado com sucesso!`
    });
  } catch (e) {
    res.status(StatusCodes.NOT_FOUND).json({
      message: `Tarefa do id ${taskId} não encontrada`
    })
  }
};
