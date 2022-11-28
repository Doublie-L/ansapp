import { IsArray, IsOptional, IsString } from "class-validator";

export class userDto {
  @IsString()
  readonly username: string;

  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  readonly password: string;


  @IsArray({

  })
  readonly roles: [];
}
