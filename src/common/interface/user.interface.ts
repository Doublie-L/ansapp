import { Document } from "mongoose";
import { ObjectId } from "mongodb";

// 角色
export interface roleInterface extends Document {
  readonly roleName: string;
  readonly roleId: string;
}

// 用户
export interface UserInterface extends Document {
  readonly username: string;
  readonly password: string;
  readonly userId: string;
  readonly roles: roleInterface;
}

// 用户
export interface departmentInterface extends Document {
 readonly departmentName: string,
 readonly departmentId: string
}
// 用户
export interface jobInterface extends Document {
  readonly jobName: string,
  readonly jobId: string
}
