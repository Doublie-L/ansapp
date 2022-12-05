import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { jobInterface } from "../common/interface/interfaces";
import { jobDto } from "../common/dto/dtos";

@Injectable()
export class JobService {
  constructor(
    @Inject("jobModel_MODEL")
    private readonly jobModel: Model<jobInterface>
  ) {
  }

  //新建部门
  async create(job: jobDto): Promise<any> {
    const createdjob = new this.jobModel(job);
    await createdjob.save();
    return this.jobModel.find();
  }

  // 获取部门列表
  async getJobList(){
    return this.jobModel.find();
  }

  //删除部门
  async delete(id: string): Promise<any> {
    const res = await this.jobModel.findByIdAndRemove(id);
    return res;
  }

  // 修改部门
  async edit(job: jobDto) {
    // const res = await this.jobModel.updateOne({ _id: job._id }, job);
    // return res;
  }

  // 根据部门名称查询
  async findOne(jobName: string): Promise<any | undefined> {
    return this.jobModel.findOne({ jobName });
  }
}
