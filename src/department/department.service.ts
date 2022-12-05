import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { departmentInterface } from "../common/interface/interfaces";
import { departmentDto } from "../common/dto/dtos";

@Injectable()
export class DepartmentService {
  constructor(
    @Inject("departmentModel_MODEL")
    private readonly departmentModel: Model<departmentInterface>
  ) {
  }

  //新建部门
  async create(department: departmentDto): Promise<any> {
    const createdDepartment = new this.departmentModel(department);
    await createdDepartment.save();
    return this.departmentModel.find();
  }

  //删除部门
  async delete(id: string): Promise<any> {
    const res = await this.departmentModel.findByIdAndRemove(id);
    return res;
  }

  // 修改部门
  async edit(department: departmentDto) {
    // const res = await this.departmentModel.updateOne({ _id: department._id }, department);
    // return res;
  }

  // 根据部门名称查询
  async findOne(departmentName: string): Promise<any | undefined> {
    return this.departmentModel.findOne({ departmentName });
  }

  //
  async getDepartmentList() {
    return this.departmentModel.find();
  }
}
