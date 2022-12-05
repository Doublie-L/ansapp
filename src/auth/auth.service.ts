import {  Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UserService } from "../user/user.service";


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ) {
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log(user);
    if (user && user.password === pass) {
      const { password, ...result } = user._doc;
      return result;
    }
    return null;
  }

  async login(user: any): Promise<any> {
    return {
      msgCode: 0,
      access_token: this.jwtService.sign(user)
    };
  }
}
