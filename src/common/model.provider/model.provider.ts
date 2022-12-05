import { Mongoose } from 'mongoose';
import { departmentSchema, jobSchema, roleSchema, taskSchema, taskStatusSchema, userSchema } from "../schemas/schemas";

export const ModelProviders = [
  {
    provide: 'UserModel_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('User', userSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'roleModel_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('role', roleSchema),
    inject: ['DATABASE_CONNECTION'], // DATABASE_CONNECTION,数据库别名
  },
  {
    provide: 'jobModel_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('job', jobSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'departmentModel_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('department', departmentSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'taskStatusModel_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('taskStatus', taskStatusSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'taskModel_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('task', taskSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

