import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { userDto } from '../common/dto/user.dto';
import { UserInterface } from '../common/interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserModel_MODEL')
    private readonly userModel: Model<UserInterface>,
  ) {}
  //新建用户
  async create(user: userDto): Promise<any> {
    const createdUser = new this.userModel(user);
    await createdUser.save();
    return this.userModel.find();
  }

  // //删除
  // async delete(id: string): Promise<any> {
  //   const res = await this.AdminUserModel.findOne({ _id: id });
  //   return of(1);
  // }
  //
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
}
