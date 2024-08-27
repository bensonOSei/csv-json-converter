import { Request, Response, NextFunction } from "express";
import { Response as JsonResponse } from "../utils/Response";

export class ErrorHandler {
  public static handleError(err: any, req: Request, res: Response, next: NextFunction): void {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    // Log the error (you can use a logging library here)
    console.error(`Error: ${message} | Status Code: ${statusCode}`);

    // Send response to the client
    res.status(statusCode).json(JsonResponse.error(err, message, statusCode));
  }
}
