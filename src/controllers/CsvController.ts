import { Request, Response } from "express";
import { Controller } from "./Controller";
import { CsvConverter } from "../services/CsvConverter";
import { Response as JsonResponse } from "../utils/Response";

export class CsvController extends Controller {
  public initializeRoutes(): void {
    this.router.get("/", (req: Request, res: Response) => res.json(Response));
  }

  public test(req: Request, response: Response) {
    return response.json(JsonResponse.success());
  }

  public async convert(
    req: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    const path = req.file?.path;

    if (!path) throw Error("no file path found");

    const converter = new CsvConverter(path);
    await converter.convert();
    const results = JSON.stringify(converter.results);
    return response.json(JsonResponse.successWithData(results));
  }
}
