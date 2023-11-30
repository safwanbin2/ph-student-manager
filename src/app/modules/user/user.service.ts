import config from "../../config";
import { TStudent } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { studentValidation } from "../student/student.validation";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";
import { userValidationSchema } from "./user.validation";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const user: Partial<TUser> = {};
  user.id = "2300001";
  user.password = password || config.default_password;
  user.role = "student";

  const validatedUser = userValidationSchema.parse(user);
  const newUser = await UserModel.create(validatedUser);
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    studentData.role = newUser.role;
    studentData.isDeleted = newUser.isDeleted;

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDB,
};
