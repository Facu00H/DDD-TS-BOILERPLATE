import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({
  path: path.resolve(`./${process.env.CONFIG_PATH}/.env`.replace(/\s/g, ""))
});
import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as compression from "compression";
import * as helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import IndexRouter from "./routes";

class App {
  private readonly app: Application;
  private readonly port: number;

  constructor(port: number) {
    this.port = port;
    this.app = express();

    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(compression.default());
    this.app.use(helmet.default());
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(cookieParser());
  }

  private routes(): void {
    const indexRouter = new IndexRouter();
    this.app.use(indexRouter.getRouter());
  }

  public start(): void {
    this.app.listen(this.port, (): void => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const server = new App(Number(process.env.PORT) || 3000);
server.start();
