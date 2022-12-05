import { Document } from "mongoose";
import { ObjectId } from "mongodb";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { departmentDto, taskStatusDto } from "../dto/dtos";

// 角色
export interface roleInterface extends Document {
  readonly roleName: string;
  readonly roleId: string;
}

// 用户
export interface userInterfaces extends Document {
  readonly username: string;
  readonly password: string;
  readonly policeNumber: string;
  readonly userId: string;
  readonly role: roleInterface;
}

// 用户
export interface departmentInterface extends Document {
  readonly departmentName: string,
  readonly _id: string
}

// 用户
export interface jobInterface extends Document {
  readonly jobName: string,
  readonly _id: string
}

export interface taskStatus {
  statusName: string;//状态代码
  statusNumber: number; //状态名称
}

export interface taskInterface {
  title: string;//状态代码
  department: departmentInterface; //状态名称\

  status: taskStatus;

  content: string;
}


