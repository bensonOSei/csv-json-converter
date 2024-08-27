import { HttpUnprocessableEntity } from "./HttpUnprocessableEntity";

export class ValidationError extends HttpUnprocessableEntity {
  message: string;
  constructor(message: string = "Validation Error") {
    super();
    this.message = message;
  }
}
