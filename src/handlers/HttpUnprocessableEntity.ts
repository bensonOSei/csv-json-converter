import { HttpError } from "./HttpError";

export class HttpUnprocessableEntity extends HttpError {
  constructor(message = "Unprocessable Entity") {
    super(message, 422);
    this.name = "HTTP_Unprocessable_Entity";
  }
}
