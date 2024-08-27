import { Router } from "express";

export abstract class Controller {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes = this.initializeRoutes.bind(this); // Bind the context
    this.initializeRoutes();
  }

  // Each controller will need to implement this method
  protected abstract initializeRoutes(): void;
}
