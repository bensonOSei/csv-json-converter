import { Request, Response, Router } from "express";
import { Controller } from "./Controller";
import { Log } from "../utils/decorators/route-decorators";

export class CsvController extends Controller {
  public initializeRoutes(): void {
    this.router.get("/", (req: Request, res: Response) =>
      res.json({
        message: "test",
      })
    );
  }

  public test(req: Request, response: Response) {
    return response.json({
        message: "test"
    })
  }

}

