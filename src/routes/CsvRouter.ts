import { AppRouter } from "./AppRouter";
import { CsvController } from "../controllers/CsvController";
import ImageUpload from "../middleware/ImageUpload";

class CsvRouter extends AppRouter {
  private controller: CsvController;

  constructor() {
    super()
    this.controller = new CsvController();
    this.run()
  }

  run() {
    this.router.get('/', this.controller.test)
    this.router.post('/convert', ImageUpload.single('csv') ,this.controller.convert)
  }
}

export default new CsvRouter().router;