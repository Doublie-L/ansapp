import { Module } from "@nestjs/common";
import { BbsController } from "./bbs.controller";
import { BbsService } from "./bbs.service";
import { ModelProviders } from "../common/model.provider/model.provider";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [BbsController],
  providers: [BbsService, ...ModelProviders]
})
export class BbsModule {
}
