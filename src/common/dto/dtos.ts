import { IsArray, IsMongoId, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { departmentInterface, jobInterface, roleInterface, userInterfaces } from "../interface/interfaces";
import { ObjectId } from "mongodb";

export class userNoPasswordDtos {
  @IsString()
  readonly username: string;

  @IsString()
  @IsOptional()
  readonly name: string;


  // 警号
  @IsString()
  @IsOptional()
  readonly policeNumber: string;


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
  @IsOptional()
  @ValidateNested()
  @Type(() => roleDto)
  readonly role: roleInterface;

  @IsOptional()
  readonly _id: string;
}

export class userDtos extends userNoPasswordDtos {
  @IsString()
  readonly password: string;
}


export class roleDto {
  @IsString({ message: "角色名必须为字符串" })
  readonly roleName: string;
  @IsOptional()
  @IsString({ message: "角色Id必须为字符串" })
  readonly roleId: string;

  @IsOptional()
  readonly _id: string;
}

export class departmentDto {
  @IsString({ message: "部门名称必须为字符串" })
  readonly departmentName: string;
  @IsOptional()
  @IsString({ message: "部门Id必须为字符串" })
  readonly departmentId: string;

  @IsOptional()
  readonly _id: string;
}

export class jobDto {
  @IsString({ message: "岗位名称必须为字符串" })
  readonly jobName: string;
  @IsOptional()
  @IsString({ message: "岗位Id必须为字符串" })
  readonly jobId: string;

  @IsOptional()
  readonly _id: string;
}

export class setUserRoleDto {
  @ValidateNested()
  @Type(() => userDtos)
  user: userInterfaces;

  @ValidateNested()
  @Type(() => roleDto)
  role: roleInterface;
}


export class setUserDepartmentDto {
  @ValidateNested()
  @Type(() => userDtos)
  user: userInterfaces;

  @ValidateNested()
  @Type(() => departmentDto)
  department: departmentInterface;
}

export class setUserJobDto {
  @ValidateNested()
  @Type(() => userDtos)
  user: userInterfaces;

  @ValidateNested()
  @Type(() => jobDto)
  job: jobInterface;
}

export class getUserByNameDto {
  @IsString()
  username: string;
}


export class getUserByPoliceNumberDto {
  @IsString()
  policeNumber: string;
}

export class pageDto {
  @IsNumber()
  pageIndex: number;

  @IsNumber()
  pageSize: number;

}

export class taskStatusDto {
  statusName: string;//部门
  statusNumber: number; //部门Id
}

export class taskDto {
  title: string;
  @ValidateNested()
  @Type(() => departmentDto)
  department: departmentDto;
  @ValidateNested()
  @Type(() => taskStatusDto)
  status: taskStatusDto;
  content: string;
  @IsOptional()
  @IsString()
  _id: string;

  @IsOptional()
  @IsString()
  reply: string;
}

export class replyDto {
  reply: string;
  id: string;
}
