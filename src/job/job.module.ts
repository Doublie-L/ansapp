import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { ModelProviders } from "../common/model.provider/model.provider";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [JobController],
  providers: [JobService,...ModelProviders]
})
export class JobModule {}
