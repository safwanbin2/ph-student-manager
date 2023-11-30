export type TUser = {
  id: String;
  password: String;
  needsPasswordChange: boolean;
  role: "student" | "faculty" | "admin";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
};
