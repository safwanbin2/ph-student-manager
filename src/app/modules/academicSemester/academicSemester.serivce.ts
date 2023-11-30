import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payLoad: TAcademicSemester) => {
  const nameCodeMapper: {
    Autumn: "01";
    Summer: "02";
    Fall: "03";
  } = {
    Autumn: "01",
    Summer: "02",
    Fall: "03",
  };

  if (nameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error("Invalid Semester Code !");
  }

  const result = await AcademicSemesterModel.create(payLoad);
  return result;
};

const getAllAcademicSemesterFromDB = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};

const getSingleAcademicSemesterFromDB = async (semesterId: string) => {
  const result = await AcademicSemesterModel.find({ _id: semesterId });
  return result;
};

const updateAcademicSemesterFromDB = async (
  semesterId: string,
  payLoad: any
) => {
  const result = await AcademicSemesterModel.updateOne(
    { _id: semesterId },
    payLoad
  );

  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterFromDB,
};
