import { Module } from '@nestjs/common';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { ModelProviders } from "../common/model.provider/model.provider";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [DepartmentController],
  providers: [DepartmentService, ...ModelProviders],
  exports:[DepartmentService]
})
export class DepartmentModule {}
