import { Body, Controller, Get, Post, Request } from "@nestjs/common";
import { BbsService } from "./bbs.service";
import { departmentDto, taskStatusDto } from "../common/dto/dtos";

@Controller("bbs")
export class BbsController {


  constructor(private bbsS: BbsService) {
  }


  @Post("add")
  createStatus(@Body() taskStatus: taskStatusDto) {
    return this.bbsS.create(taskStatus);
  }

  @Post("getStatus")
  getStatus() {
    return this.bbsS.getS();
  }




}
