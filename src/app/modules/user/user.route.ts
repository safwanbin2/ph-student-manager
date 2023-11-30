import { Router } from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { studentValidation } from "../student/student.validation";

const router = Router();

router.post(
  "/create-student",
  validateRequest(studentValidation.createStudentValidationSchema),
  UserController.createStudent
);

export const UserRouter = router;
