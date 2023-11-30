import z from "zod";

export const nameValidationSchema = z.object({
  firstName: z.string().min(1).max(20),
  lastName: z.string().min(1).max(20),
});

// Define the guardian schema
export const guardianValidationSchema = z.object({
  name: nameValidationSchema,
  contactNo: z.string().min(11).max(15), // adjust the max length as needed
});

// Define the student schema
export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z.object({
      name: nameValidationSchema,
      email: z.string().email(),
      gender: z.enum(["male", "female"]),
      dateOfBirth: z.date(),
      contactNo: z.string().min(11).max(15), // adjust the max length as needed
      emergencyContactNo: z.string().min(11).max(15), // adjust the max length as needed
      presentAddress: z.string(),
      permanentAddress: z.string(),
      profileImg: z.string(),
      guardian: guardianValidationSchema,
      localGuardian: guardianValidationSchema,
      // academicDepartment: z.string(), // Assuming Schema.Types.ObjectId is represented as a string
      admissionSemester: z.string(), // Assuming Schema.Types.ObjectId is represented as a string
    }),
  }),
});

export const studentValidation = {
  createStudentValidationSchema,
};
