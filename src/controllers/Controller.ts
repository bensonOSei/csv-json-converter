import { Request, Response, NextFunction, Router } from "express";

export abstract class Controller {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes = this.initializeRoutes.bind(this); // Bind the context
    this.initializeRoutes()
  }

  // Each controller will need to implement this method
  protected abstract initializeRoutes(): void;

  // Utility method for sending JSON responses
  protected sendResponse(
    res: Response,
    data: any,
    statusCode: number = 200
  ): void {
    res.status(statusCode).json(data);
  }

  // Utility method for handling errors
  protected handleError(
    res: Response,
    error: any,
    statusCode: number = 500
  ): void {
    res
      .status(statusCode)
      .json({ error: error.message || "An error occurred" });
  }
}
