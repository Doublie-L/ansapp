import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";

import { LoginModule } from "./login/login.module";
import { RoleModule } from "./role/role.module";
import { JobModule } from "./job/job.module";
import { DepartmentModule } from "./department/department.module";
import { BbsModule } from "./bbs/bbs.module";
import { TaskModule } from "./task/task.module";
import { ServeStaticModule } from "@nestjs/serve-static";

import { join } from "path";

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, "..", "client")
  }), UserModule, LoginModule, RoleModule, JobModule, DepartmentModule, TaskModule, BbsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
