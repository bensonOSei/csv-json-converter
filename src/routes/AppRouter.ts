import { Router } from "express";
import { IRouter } from "../interfaces/iRouter";

export abstract class AppRouter implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.run = this.run.bind(this);
  }

  public abstract run(): void
}
