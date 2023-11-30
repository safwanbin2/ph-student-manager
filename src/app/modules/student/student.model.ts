import { Schema, model } from "mongoose";
import { TGuardian, TName, TStudent } from "./student.interface";

const nameSchema = new Schema<TName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<TGuardian>({
  name: { type: nameSchema, required: true },
  contactNo: String,
});

const studentSchema = new Schema<TStudent>(
  {
    id: { type: String, required: true },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: "UserModel",
    },
    name: { type: nameSchema, required: true },
    email: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"] },
    role: {
      type: String,
      enum: ["student", "faculty", "admin"],
      default: "student",
    },
    dateOfBirth: { type: Date, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    profileImg: { type: String, required: true },
    guardian: { type: guardianSchema, required: true },
    localGuardian: { type: guardianSchema, required: true },
    // academicDepartment: { type: Schema.Types.ObjectId, required: true },
    // academicDepartment: { type: String, required: true },
    admissionSemester: { type: String, required: true },
    isDeleted: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

export const StudentModel = model("student", studentSchema);
