import { Router } from "express";
import { IRouter } from "../interfaces/iRouter";

export class Routes implements IRouter {
  protected router: Router;

  constructor(router: Router) {
    this.router = router;
    this.runRoutes();
  }

  public runRoutes(): void {}
}
