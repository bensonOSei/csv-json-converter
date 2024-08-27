import { NextFunction, Request, Response } from "express";
import { Controller } from "./Controller";
import { CsvConverter } from "../services/CsvConverter";
import { Response as JsonResponse } from "../utils/Response";
import { HttpNotFound } from "../handlers/HttpNotFound";
import { HttpStatusCodes } from "../enums/HttpStatusCodes";

export class CsvController extends Controller {
  public test(req: Request, response: Response) {
    return response.status(HttpStatusCodes.NO_CONTENT).end();
  }

  public async convert(req: Request, response: Response, next: NextFunction) {
    const path = req.file?.path;

    try {
      if (!path) throw new HttpNotFound("CSV not found");

      const converter = new CsvConverter(path);
      await converter.convert();
      const results = JSON.stringify(converter.results);
      return response.json(JsonResponse.successWithData(results));
    } catch (err) {
      next(err);
    }
  }
}
