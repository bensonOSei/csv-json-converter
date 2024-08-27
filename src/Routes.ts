import { Application, Router } from "express";
import CsvRouter from "./routes/CsvRouter";

const MAIN_PATH = "/api";
const apiRouter = Router();
export const apiRoutes = (app: Application) => {
  apiRouter.use("/csv", CsvRouter);

  app.use(MAIN_PATH, apiRouter);
};

export class Routes {
  private readonly API_PATH = "/api";
  private readonly router: Router;
  private readonly app: Application;

  constructor(app: Application) {
    this.app = app;
    this.router = Router();
  }

  public initializeRoutes(): void {
    this.router.use("/csv", CsvRouter);

    this.app.use(this.API_PATH, this.router);
  }
}
