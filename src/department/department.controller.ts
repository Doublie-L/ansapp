import { Body, Controller, Post } from "@nestjs/common";
import { departmentDto } from "../common/dto/dtos";
import { DepartmentService } from "./department.service";



@Controller("department")
export class DepartmentController {

  constructor(private departmentS: DepartmentService) {
  }

  //新建部門
  @Post("add")
  async create(@Body() department: departmentDto) {
    return this.departmentS.create(department);
  }

  //删除部門
  @Post("del")
  async del(@Body() Id: { Id: string }) {
    return this.departmentS.delete(Id.Id);
  }

  // 修改部門
  @Post("edit")
  async edit(@Body()  department: departmentDto) {
    return this.departmentS.edit(department);
  }

  // 查找  通过部門名查找
  @Post("find")
  async find(@Body() department: departmentDto) {
    return this.departmentS.findOne(department.departmentName);
  }


  // 获取职位列表
  @Post("getDepartmentAll")
  async getJobAll() {
    return this.departmentS.getDepartmentList();
  }
}
