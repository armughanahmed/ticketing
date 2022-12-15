import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode = 404;
  reason = "Route Not Found";

  constructor() {
    super("Route Not Found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  seralizeError() {
    return [{ message: this.reason }];
  }
}
