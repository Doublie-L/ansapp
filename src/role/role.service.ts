import { Inject, Injectable } from "@nestjs/common";
import { roleDto } from "../common/dto/dtos";
import { Model } from "mongoose";
import { roleInterface } from "../common/interface/interfaces";

@Injectable()
export class RoleService {

  constructor(
    @Inject("roleModel_MODEL")
    private readonly roleModel: Model<roleInterface>
  ) {
  }

  //新建部门
  async create(role: roleDto): Promise<any> {
    const createdrole = new this.roleModel(role);
    await createdrole.save();
    return this.roleModel.find();
  }

  //删除部门
  async delete(id: string): Promise<any> {
    const res = await this.roleModel.findByIdAndRemove(id);
    return res;
  }

  // 修改部门
  async edit(role: roleDto) {
    // const res = await this.roleModel.updateOne({ _id: role._id }, role);
    // return res;
  }

  // 根据部门名称查询
  async findOne(roleName: string): Promise<any | undefined> {
    return this.roleModel.findOne({ roleName });
  }

  async getRoleList() {
    return this.roleModel.find();
  }

}
