import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { DatabaseModule } from "../database/database.module";
import { ModelProviders } from "../common/model.provider/model.provider";

@Module({
  imports: [DatabaseModule],
  controllers: [RoleController],
  providers: [RoleService,...ModelProviders]
})
export class RoleModule {}
