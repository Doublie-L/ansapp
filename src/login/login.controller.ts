import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "../auth/guards/local-auth.guard";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { AuthService } from "../auth/auth.service";

@Controller("login")
export class LoginController {

  constructor(
    private readonly authService: AuthService
  ) {
  }

  //登录，并获取令牌token
  @UseGuards(LocalAuthGuard)
  @Post()
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  //通过token获取用户信息
  @UseGuards(JwtAuthGuard)
  @Post("profile")
  getProfile(@Request() req) {
    return {
      msg: req.user,
      msgCode: 0
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post("profile2")
  getProfile2(@Request() req) {
    return {
      msg: req.user,
      msgCode: 0
    };
  }
}
