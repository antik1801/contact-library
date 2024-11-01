import { TUser } from "./user.interface";
import { User } from "./user.model"

const createUserIntoDB = async(payload: TUser) =>{
    const result = await User.create(payload);
    return result;
}

const getAllUsersFromDB = async() =>{

    const result = await User.find();
    return result;
}

const updateUserIntoDB = async(id: string,payload: Partial<TUser>) =>{
    const result = await User.findByIdAndUpdate(id, payload, {new: true});
    return result;
}

const deleteUserFromDB = async(id: string) =>{
    const result = await User.findByIdAndUpdate(id, {isDeleted: true}, {new: true});
    return result;
}

const getSingleUserFromDB = async(id: string) =>{
    const result = await User.findById(id);
    return result;
}

export const userService = {
    getAllUsersFromDB,
    createUserIntoDB,
    updateUserIntoDB,
    deleteUserFromDB,
    getSingleUserFromDB
}