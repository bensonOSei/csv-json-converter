import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import { ValidationError } from "../handlers/ValidationError";

export class RequestValidator {
  static validate(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body);
      if (error) {
        return next(new ValidationError(error.message));
      }
      next();
    };
  }
}
