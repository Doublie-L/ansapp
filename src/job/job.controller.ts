import { Body, Controller, Post } from "@nestjs/common";
import { jobDto } from "../common/dto/dtos";
import { JobService } from "../job/job.service";

@Controller('job')
export class JobController {
  constructor(private jobS: JobService) {
  }

  //新建职位
  @Post("add")
  async create(@Body() job: jobDto) {
    return this.jobS.create(job);
  }

  //删除职位
  @Post("del")
  async del(@Body() Id: { Id: string }) {
    return this.jobS.delete(Id.Id);
  }

  // 修改职位
  @Post("edit")
  async edit(@Body()  job: jobDto) {
    return this.jobS.edit(job);
  }

  // 查找  通过职位名查找
  @Post("find")
  async find(@Body() job: jobDto) {
    return this.jobS.findOne(job.jobName);
  }

  // 获取职位列表
  @Post("getJobAll")
  async getJobAll() {
    return this.jobS.getJobList();
  }
}
