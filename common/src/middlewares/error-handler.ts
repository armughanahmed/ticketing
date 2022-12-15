import { CustomError } from "../errors/custom-error";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.seralizeError() });
  }

  console.error(err);
  res.status(400).send({ errors: [{ message: "Something Went Wrong" }] });
};
