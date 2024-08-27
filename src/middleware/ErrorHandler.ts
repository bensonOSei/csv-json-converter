import { Request, Response, NextFunction } from "express";
import { Response as JsonResponse } from "../utils/Response";
import { HttpStatusCodes } from "../enums/HttpStatusCodes";

export class ErrorHandler {
  public static handleError(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    const statusCode = err.statusCode || HttpStatusCodes.INTERNAL_SERVER_ERROR;
    const message = err.message || "Internal Server Error";

    // Log the error (you can use a logging library here)
    console.error(`Error: ${message} | Status Code: ${statusCode}`);

    // Send response to the client
    res.status(statusCode).json(JsonResponse.error(err, message, statusCode));
  }
}
