import { Router } from "express";

export abstract class Controller {
  public router: Router;

  constructor() {
    this.router = Router();
  }
}
