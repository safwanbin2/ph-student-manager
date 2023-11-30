import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserService } from "./user.service";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const { password, student } = req.body;

  const result = await UserService.createStudentIntoDB(password, student);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Created successfully",
    data: result,
  });
});
export const UserController = {
  createStudent,
};
