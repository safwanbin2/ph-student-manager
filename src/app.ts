import express from "express";
import cors from "cors";
import { UserRouter } from "./app/modules/user/user.route";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { routeNotFound } from "./app/middlewares/routeNotFound";
import { StudentRouter } from "./app/modules/student/student.route";
import { AcademicSemesterRouter } from "./app/modules/academicSemester/academicSemester.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", UserRouter);
app.use("/api/v1/students", StudentRouter);
app.use("/api/v1/academic-semesters", AcademicSemesterRouter);

app.use(globalErrorHandler);
app.use(routeNotFound);
export default app;
