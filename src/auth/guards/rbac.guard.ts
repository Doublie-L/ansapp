import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class RbacGuard implements CanActivate {

  constructor(private readonly role: number) {
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {

    //根据用户角色判断是否有权限操作
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const roles = user.roles;
    if (user.role < this.role) {
      throw new ForbiddenException("对不起，您无权操作");
    }
    return true;
  }
}
