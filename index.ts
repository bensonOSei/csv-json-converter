import dotenv from "dotenv";
import { App } from "./src/App";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = new App();
app.serve(PORT as number);
