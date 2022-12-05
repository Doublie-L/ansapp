import { Inject, Injectable } from "@nestjs/common";
import { taskStatusDto } from "../common/dto/dtos";
import { departmentInterface, taskStatus } from "../common/interface/interfaces";
import { Model } from "mongoose";

@Injectable()
export class BbsService {


  constructor(@Inject("taskStatusModel_MODEL")
              private readonly taskStatusModel: Model<taskStatus>) {
  }

  async create(taskStatus: taskStatusDto) {
    const createdTaskStatus = new this.taskStatusModel(taskStatus);
    await createdTaskStatus.save();
    return this.taskStatusModel.find();
  }

  async getS(){
    return this.taskStatusModel.find();
  }


}
