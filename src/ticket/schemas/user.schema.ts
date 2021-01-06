import * as mongoose from 'mongoose';
export const UserSchema=new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
      },
      email: {
        type: String,
        trim: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    
})
