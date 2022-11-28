import { Body, Controller, Post } from "@nestjs/common";
import { userDto } from "../common/dto/user.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {
  }

  //新建用戶
  @Post("add")
  async create(@Body() user: userDto) {
    return this.userService.create(user);
  }

  //删除
  @Post("del")
  async del(@Body() Id: { Id: string }) {
    return this.userService.delete(Id.Id);
  }

  // 修改
  @Post("edit")
  async edit(@Body() user: userDto) {
    return this.userService.edit(user);
  }

  // 查找  通过用户名查找
  @Post("find")
  async find(@Body() user: userDto) {
    return this.userService.findOne(user.username);
  }
}
