import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import {
  getUserByNameDto,
  getUserByPoliceNumberDto, pageDto,
  setUserDepartmentDto,
  setUserJobDto,
  setUserRoleDto,
  userDtos, userNoPasswordDtos
} from "../common/dto/dtos";
import { UserService } from "./user.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { RbacGuard } from "../auth/guards/rbac.guard";

@UseGuards(JwtAuthGuard, new RbacGuard(["管理员", "超级管理员"]))
@Controller("user")
export class UserController {
  constructor(private userService: UserService) {
  }

  //新建用戶
  @Post("add")
  async create(@Body() user: userDtos) {
    return this.userService.create(user);
  }

  //删除
  @Post("del")
  async del(@Body() Id: { Id: string }) {
    return this.userService.delete(Id.Id);
  }

  // 修改
  @Post("edit")
  async edit(@Body() user: userNoPasswordDtos) {
    return this.userService.edit(user);
  }

  // 查找  通过用户名查找
  @Post("findByName")
  async find(@Body() user: userDtos) {
    return this.userService.findOne(user.username);
  }

  // 获取用户列表

  @Post("getUser")
  async getUser(@Body() page: pageDto) {
    return this.userService.getUser(page);
  }

  @Post("getUserByName")
  async getUserByName(@Body() req: getUserByNameDto) {
    return this.userService.findUserAll(req.username);
  }

  @Post("getUserByPoliceNumber")
  async getUserByPoliceNumber(@Body() req: getUserByPoliceNumberDto) {
    return this.userService.getUserByPoliceNumber(req.policeNumber);
  }


  // 设置用户角色
  @Post("setUserRole")
  setUserRole(@Body() setUserRole: setUserRoleDto) {
    return this.userService.setUserRole(setUserRole);
  }


  // 设置用户部门
  @Post("setUserDepartment")
  setUserDepartment(@Body() setUserDepartment: setUserDepartmentDto) {
    return this.userService.setUserDepartment(setUserDepartment);
  }

  // 设置用户岗位
  @Post("setUserJob")
  setUserJob(@Body() setUserJob: setUserJobDto) {
    return this.userService.setUserJob(setUserJob);
  }
}
