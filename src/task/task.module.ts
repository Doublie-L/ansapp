import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { DatabaseModule } from "../database/database.module";
import { ModelProviders } from "../common/model.provider/model.provider";
import { TaskController } from "./task.controller";

@Module({
  imports:[DatabaseModule],
  controllers: [TaskController],
  providers: [TaskService,...ModelProviders]
})
export class TaskModule {}
