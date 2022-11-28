import { Body, Controller, Post } from '@nestjs/common';
import { userDto } from '../common/dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  //新建用戶
  @Post()
  async create(@Body() user: userDto) {
    return this.userService.create(user);
  }
}
