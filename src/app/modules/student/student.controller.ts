import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentService } from "./student.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const getAllStudents: RequestHandler = catchAsync(async (req, res) => {
  const result = await StudentService.getAllStudentsFromDB();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Retrieved Student successfully",
    data: result,
  });
});

export const StudentController = {
  getAllStudents,
};
