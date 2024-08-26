import { Request, Response, Router } from "express";
import { CsvRouter } from "../routes/CsvRouter";
import { Controller } from "./Controller";
import { Log } from "../utils/decorators/route-decorators";

class CsvController extends Controller {
  @Log
  public initializeRoutes(): void {
    this.router.get("/", (req: Request, res: Response) =>
      res.json({
        message: "test",
      })
    );
  }

}

export default new CsvController();
