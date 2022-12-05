import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { taskInterface } from "../common/interface/interfaces";
import { replyDto, taskDto } from "../common/dto/dtos";

@Injectable()
export class TaskService {

  constructor(@Inject("taskModel_MODEL")
              private readonly taskModel: Model<taskInterface>) {
  }

  async create(task: taskDto) {
    const createdTask = new this.taskModel(task);
    await createdTask.save();
    return this.taskModel.find();
  }

  async getTaskAll() {
    return this.taskModel.find();
  }

  async addReply(reply: replyDto) {
    const res = await this.taskModel.findByIdAndUpdate(reply.id, {
      $set: {
        reply: reply.reply
      }
    });

    return res;
  }
}
