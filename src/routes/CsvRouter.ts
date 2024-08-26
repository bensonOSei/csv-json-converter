import { AppRouter } from "./AppRouter";
import { CsvController } from "../controllers/CsvController";

class CsvRouter extends AppRouter {
  private controller: CsvController;

  constructor() {
    super()
    this.controller = new CsvController();
    this.run()
  }

  run() {
    this.router.get('/', this.controller.test)
  }
}

export default new CsvRouter().router;