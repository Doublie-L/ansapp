import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { AppController } from "../app.controller";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { ModelProviders } from "../common/model.provider/model.provider";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...ModelProviders],
  exports:[UserService]
})
export class UserModule {
}
