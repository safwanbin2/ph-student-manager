import z from "zod";

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum(["Autumn", "Summer", "Fall"]),
    year: z.string(),
    code: z.enum(["01", "02", "03"]),
    startMonth: z.enum([
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
    ]),
    endMonth: z.enum([
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
    ]),
  }),
});

const updateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum(["Autumn", "Summer", "Fall"]).optional(),
    year: z.string().optional(),
    code: z.enum(["01", "02", "03"]).optional(),
    startMonth: z
      .enum([
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
      ])
      .optional(),
    endMonth: z
      .enum([
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
      ])
      .optional(),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterValidationSchema,
  updateAcademicSemesterValidationSchema,
};
