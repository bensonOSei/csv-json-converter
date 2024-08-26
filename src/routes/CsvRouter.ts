import { Request, Response, Router } from "express";
import { IRouter } from "../interfaces/iRouter";
import ImageUpload from "../middleware/ImageUpload";
import { Routes } from "./Routes";

export class CsvRouter extends Routes {
  public runRoutes() {
    return this.router.get('/',(req: Request, res: Response) => {
        return res.json({
            message: 'Working!'
        })
    })
    // this.router.post("/convert", ImageUpload.single("csv"));
  }
}
