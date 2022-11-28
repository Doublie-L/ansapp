import { Mongoose } from 'mongoose';
import { userSchema } from '../schemas/user.schema';

export const ModelProviders = [
  {
    provide: 'UserModel_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('User', userSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
