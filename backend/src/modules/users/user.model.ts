import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
    },
    phoneNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    profileImg:{
        type: String,
        required: true
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
})


userSchema.pre('find', function(next){
    // console.log(this);
    this.find({isDeleted: {$ne: true}});
    next();
  })
  
userSchema.pre('findOne', function(next){
    // console.log(this);
    this.find({isDeleted: {$ne: true}});
    next();
  })


export const User = model<TUser>('User', userSchema);