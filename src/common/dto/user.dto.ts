import { IsArray, IsMongoId, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { departmentInterface, jobInterface, UserInterface } from "../interface/user.interface";
import { ObjectId } from 'mongodb'

export class userDto {
  @IsString()
  readonly username: string;

  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  readonly password: string;

  @IsOptional()
  readonly userId: ObjectId;


  // 部门
  @IsOptional()
  @ValidateNested()
  @Type(() => departmentDto)
  department: departmentInterface;

  // 职位
  @IsOptional()
  @ValidateNested()
  @Type(() => jobDto)
  job: jobInterface;




  // 可有可无
  @IsArray()
  @IsOptional()
  @ValidateNested()
  @Type(() => roleDto)
  readonly role: UserInterface;

  @IsOptional()
  readonly _id: ObjectId;
}

export class roleDto {
  @IsString({ message: "角色名必须为字符串" })
  readonly roleName: string;
  @IsString({ message: "角色Id必须为字符串" })
  readonly roleId: ObjectId;
}

export class departmentDto {
  @IsString({ message: "部门名称必须为字符串" })
  readonly departmentName: string;
  @IsString({ message: "部门Id必须为字符串" })
  readonly departmentId: ObjectId;
}

export class jobDto {
  @IsString({ message: "岗位名称必须为字符串" })
  readonly jobName: string;
  @IsString({ message: "岗位Id必须为字符串" })
  readonly jobId: ObjectId;
}
