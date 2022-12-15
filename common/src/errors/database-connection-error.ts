import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  statusCode: number = 500;
  reason = "Error Connecting To Database";
  constructor() {
    super("Error Connecting To DB");
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  seralizeError(): { message: string; field?: string | undefined }[] {
    return [{ message: this.reason }];
  }
}
