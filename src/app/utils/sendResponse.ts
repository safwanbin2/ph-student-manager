import { Response } from "express";

type TData<T> = {
  status: number;
  success: boolean;
  message: string;
  data: T;
};

export const sendResponse = (res: Response, data: TData<object>) => {
  res.status(data.status).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};
