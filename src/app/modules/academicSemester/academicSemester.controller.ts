import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AcademicSemesterService } from "./academicSemester.serivce";

const createAcademicSemester = catchAsync(async (req, res, next) => {
  const result = await AcademicSemesterService.createAcademicSemesterIntoDB(
    req.body
  );

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Created Academic Semester successfully",
    data: result,
  });
});

const getAllAcademicSemester = catchAsync(async (req, res, next) => {
  const result = await AcademicSemesterService.getAllAcademicSemesterFromDB();

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Retrieved All Academic Semesters Successfully",
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res, next) => {
  const result = await AcademicSemesterService.getSingleAcademicSemesterFromDB(
    req.params.semesterId
  );

  sendResponse(res, {
    status: httpStatus.FOUND,
    success: true,
    message: "Retrieved Single semester successfully",
    data: result,
  });
});

const updateAcademicSemester = catchAsync(async (req, res, next) => {
  const { semesterId } = req.params;
  const payLoad = req.body;

  const result = await AcademicSemesterService.updateAcademicSemesterFromDB(
    semesterId,
    payLoad
  );

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "updated semester successfully",
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
