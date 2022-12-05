import * as mongoose from "mongoose";
import { departmentInterface } from "../interface/interfaces";


export const userSchema = new mongoose.Schema({
  username: String, //用户名
  password: String, // 密码
  policeNumber: String,
  department: Object, //部门
  job: Object, // 职务
  role: Object // 角色
});

export const roleSchema = new mongoose.Schema({
  roleName: String, //部门
  roleId: String //部门Id
});

export const jobSchema = new mongoose.Schema({
  jobName: String, // 职务
  jobId: String //职务Id
});

export const departmentSchema = new mongoose.Schema({
  departmentName: String, //部门
  departmentId: String //部门Id
});

export const taskStatusSchema = new mongoose.Schema({
  statusName: String, //状态代码
  statusNumber: Number //状态名称
});

export const taskSchema = new mongoose.Schema({
  title: String,
  department: Object,
  status: Object,
  content: String,
  reply: String
});
