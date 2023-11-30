import { Schema, model } from "mongoose";
import { TAcademicSemester, TMonth } from "./academicSemester.interface";

const academicSemesterMonths: TMonth[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: { type: String, enum: ["Autumn", "Summer", "Fall"], required: true },
    year: { type: String, required: true },
    code: { type: String, enum: ["01", "02", "03"] },
    startMonth: { type: String, enum: academicSemesterMonths, required: true },
    endMonth: { type: String, enum: academicSemesterMonths, required: true },
  },
  { timestamps: true }
);

academicSemesterSchema.pre("save", async function (next) {
  const isExists = await AcademicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });
  if (isExists) {
    throw new Error("Semester already exits");
  }
  next();
});

// academicSemesterSchema.pre("updateOne", async function (next) {
//   const isExists = await AcademicSemesterModel.findOne({
//     year: this.year,
//     name: this.name,
//   });
//   if (isExists) {
//     throw new Error("Semester already exits");
//   }
//   next();
// });

export const AcademicSemesterModel = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
