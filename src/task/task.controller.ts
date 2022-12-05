import { Body, Controller, Post } from "@nestjs/common";
import { replyDto, taskDto } from "../common/dto/dtos";
import { TaskService } from "./task.service";

@Controller('task')
export class TaskController {


constructor(private taskS: TaskService) {
}
  @Post("add")
  createStatus(@Body() task: taskDto) {
    return this.taskS.create(task);
  }

  @Post("getTaskAll")
  getTaskAll() {
    return this.taskS.getTaskAll();
  }

  @Post("reply")
  addReply(@Body() reply:replyDto) {
    return this.taskS.addReply(reply);
  }
}
