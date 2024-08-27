import { HttpUnprocessableEntity } from "./HttpUnprocessableEntity";

export class ValidationError extends HttpUnprocessableEntity {
  message: string = "Validation Error";
}
