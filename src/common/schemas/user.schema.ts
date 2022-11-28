import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  username: String, //用户名
  password: String, // 密码
  roles: [{ roleName: String, roleId: Number }],
});
