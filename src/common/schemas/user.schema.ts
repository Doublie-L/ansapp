import * as mongoose from "mongoose";


export const userSchema = new mongoose.Schema({
  username: String, //用户名
  password: String, // 密码
  department: Object, //部门
  job: Object, // 职务
  role: Object // 角色
});

export const roleSchema = new mongoose.Schema({
  roleName: String, //部门
  roleId: String, //部门Id
});

export const jobSchema = new mongoose.Schema({
  jobName: String, // 职务
  jobId: String, //职务Id
});

export const departmentSchema = new mongoose.Schema({
  departmentName: String, //部门
  departmentId: String, //部门Id
});
