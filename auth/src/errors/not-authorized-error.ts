import { CustomError } from "./custom-error";
export class NotAuthorizedError extends CustomError {
  statusCode: number = 401;

  constructor() {
    super("Not Authorized");
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  seralizeError(): { message: string; field?: string | undefined }[] {
    return [{ message: "Not Authorized" }];
  }
}
