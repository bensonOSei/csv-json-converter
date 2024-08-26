import express, { Application } from "express";
import CsvController from "./controllers/CsvController";

class App {
  public express: Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware() {
    this.express.use(express.json());
  }

  private routes() {
    this.express.use('/api/csv', CsvController.router)
  }
}

export default new App().express;
