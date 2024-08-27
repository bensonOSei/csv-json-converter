import { AppRouter } from "./AppRouter";
import { CsvController } from "../controllers/CsvController";
import ImageUpload from "../middleware/ImageUpload";
import { csvSchema } from "../utils/validation-schemas/csv-schema";
import { RequestValidator } from "../middleware/RequestValidator";

class CsvRouter extends AppRouter {
  private controller: CsvController;

  constructor() {
    super();
    this.controller = new CsvController();
    this.run();
  }

  run() {
    this.router.get("/", this.controller.test);
    this.router.post(
      "/convert",
      [RequestValidator.validate(csvSchema), ImageUpload.single("csv")],
      this.controller.convert,
    );
  }
}

export default new CsvRouter().router;
