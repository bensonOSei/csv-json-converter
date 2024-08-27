import { NextFunction, Request, Response } from "express";
import rateLimit from "express-rate-limit";
import { HttpTooManyRequests } from "../handlers/HttpTooManyRequest";

export class RateLimiter {
  static limit() {
    return rateLimit({
      windowMs: 60 * 1000,
      limit: 60,
      standardHeaders: true,
      legacyHeaders: false,
      handler: (req: Request, res: Response, next: NextFunction) =>
        next(new HttpTooManyRequests()),
    });
  }
}
