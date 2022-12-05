import { Body, Controller, Post } from "@nestjs/common";
import { RoleService } from "../role/role.service";
import { roleDto } from "../common/dto/dtos";

@Controller('role')
export class RoleController {
  constructor(private roleS: RoleService) {
  }

  //新建职位
  @Post("add")
  async create(@Body() role: roleDto) {
    return this.roleS.create(role);
  }

  //删除职位
  @Post("del")
  async del(@Body() Id: { Id: string }) {
    return this.roleS.delete(Id.Id);
  }

  // 修改职位
  @Post("edit")
  async edit(@Body()  role: roleDto) {
    return this.roleS.edit(role);
  }

  // 查找  通过职位名查找
  @Post("find")
  async find(@Body() role: roleDto) {
    return this.roleS.findOne(role.roleName);
  }

  // 获取职位列表
  @Post("getRoleAll")
  async getJobAll() {
    return this.roleS.getRoleList();
  }
}
