import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { userService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


const createUser = catchAsync(async (req:Request, res:Response) =>{
    const result = await userService.createUserIntoDB(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User created successfully",
        data: result
    })
})

const getAllUsers = catchAsync(async(req:Request, res:Response) =>{
    const result = await userService.getAllUsersFromDB();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "All users retrived successfully",
        data: result
    })
})


const getSingleUser = catchAsync(async (req:Request, res:Response) =>{
    const {userId} = req.params;
    const result = await userService.getSingleUserFromDB(userId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Single user retrieved successfully",
        data: result
    })
})

const updateUser = catchAsync(async(req:Request, res:Response) =>{
    const {userId} = req.params;
    const result = await userService.updateUserIntoDB(userId, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Single user updated successfully",
        data: result
    })
})

const deleteUser = catchAsync(async(req:Request, res: Response) =>{
    const {userId} = req.params;
    const result = await userService.deleteUserFromDB(userId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User deleted successfully",
        data: result
    })
})


export const userController = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getSingleUser
}