import { Request, Response, Router } from "express";
import { Controller } from "./Controller";
import { Log } from "../utils/decorators/route-decorators";
import { CsvConverter } from "../services/CsvConverter";
import { json } from "stream/consumers";

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
  
  public async convert(req: Request, response: Response) {
    const path = req.file?.path;

    if (!path) throw Error('no file path found')

    const converter = new CsvConverter(path)
    await converter.convert()
    console.log(converter.results)
    return response.json(converter.results)
  }

}

