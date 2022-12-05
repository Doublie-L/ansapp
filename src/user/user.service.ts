import { HttpException, Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import {
  pageDto,
  setUserDepartmentDto,
  setUserJobDto,
  setUserRoleDto,
  userDtos,
  userNoPasswordDtos
} from "../common/dto/dtos";
import { userInterfaces } from "../common/interface/interfaces";

@Injectable()
export class UserService {
  constructor(
    @Inject("UserModel_MODEL")
    private readonly userModel: Model<userInterfaces>
  ) {
  }

  //新建用户
  async create(user: userDtos): Promise<any> {
    const createdUser = new this.userModel(user);
    await createdUser.save();
    return this.userModel.find();
  }

  // 获取用户列表
  async getUser(page:pageDto): Promise<any> {
    return this.userModel.find().skip((page.pageIndex-1)*page.pageSize).limit(page.pageSize).select("-password").exec();
  }

  //删除
  async delete(id: string): Promise<any> {
    const res = await this.userModel.findByIdAndRemove(id);
    return res;
  }

  // 修改
  async edit(user: userNoPasswordDtos) {
    const res = await this.userModel.updateOne({ _id: user._id }, user);
    return res;
  }

  // 根据姓名查询
  async findOne(username: string): Promise<any> {

    const res = await this.userModel.findOne({ username });
    if (!res) {
      throw new HttpException({
        message: "未查找到改用户"
      }, 303);
    }

    return res;
  }

 async findUserAll(username: string): Promise<any>{
    const res = await this.userModel.find({ username });
    if (!res) {
      throw new HttpException({
        message: "未查找到改用户"
      }, 303);
    }

    return res;
  }
  // 根据姓名查询
  async getUserByPoliceNumber(policeNumber: string): Promise<any> {

    const res = await this.userModel.find({ policeNumber });
    if (!res) {
      throw new HttpException({
        message: "未查找到改用户"
      }, 303);
    }

    return res;
  }

  // //族谱路径
  // async getNodePath(id: string) {
  //   const res = await this.AdminUserModel.findOne({ _id: id });
  // }
  //
  //
  // // 根据姓名查询
  // async findOne(username: string): Promise<any | undefined> {
  //   return this.AdminUserModel.findOne({ username });
  // }
  //
  // async findAll(): Promise<adminUserInterface[]> {
  //   return this.AdminUserModel.find().select("-password").exec();
  // }
  //
  // async findAllSection(): Promise<adminUserInterface[]> {
  //   return this.AdminUserModel.find({ type: "section" }).exec();
  // }


  // 设置用户角色属性
  async setUserRole(setUserRole: setUserRoleDto) {
    return this.userModel.findByIdAndUpdate(setUserRole.user._id, {
      $set: {
        role: setUserRole.role
      }
    });
  }

  // 设置用户部门属性
  async setUserDepartment(setUserRole: setUserDepartmentDto) {
    return this.userModel.findByIdAndUpdate(setUserRole.user._id, {
      $set: {
        department: setUserRole.department
      }
    });
  }

  // 设置用户岗位属性
  async setUserJob(setUserJob: setUserJobDto) {
    const id = setUserJob.user._id;
    return this.userModel.findByIdAndUpdate(id, {
      $set: {
        job: setUserJob.job
      }
    });
  }
}
