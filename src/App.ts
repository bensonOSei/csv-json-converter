import express, { Application } from "express";
import { Routes } from "./Routes";
import { ErrorHandler } from "./middleware/ErrorHandler";

export class App {
  public express: Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.express.use(ErrorHandler.handleError);
  }

  private middleware() {
    this.express.use(express.json());
  }

  private routes() {
    const apiRoutes = new Routes(this.express);
    apiRoutes.initializeRoutes();
  }

  public serve(port: number) {
    this.express.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  }
}
