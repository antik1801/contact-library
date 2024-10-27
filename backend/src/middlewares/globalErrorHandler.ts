/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response , NextFunction} from "express";
import { TErrorSources } from "../inteface/error.interface";
// import config from "../app/config";

const globalErrorHandler = (err: any, req:Request, res:Response, next:NextFunction) =>{
    const statusCode = 500;
    const message = err.message || 'Something went wrong';
  
  
    const errorSources :TErrorSources =[{
      path: "",
      message: "Something went wrong"
    }] 

    res.status(statusCode).json({
        success: false,
        message,
        error : err,
        errorSources,
        // stack: config.NODE_ENV == 'development'
      })
}

export default globalErrorHandler;