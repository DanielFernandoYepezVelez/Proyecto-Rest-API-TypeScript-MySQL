import express, { Application } from "express";
import morgan from "morgan";

import indexRouter from "./routes/index";
import postRouter from "./routes/posts";

class App {
  // private app: Application;

  constructor(private app: Application) {
    // this.app = express();
    this.init();
  }

  private init(): void {
    this.middlewares();
    this.routes();
    this.start();
  }

  private settings(): void {
    this.app.set("port", process.env.PORT || 3000);
  }

  private middlewares(): void {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.app.use(indexRouter);
    this.app.use("/posts", postRouter);
  }

  private async start(): Promise<void> {
    this.settings();
    await this.app.listen(this.app.get("port"));
    console.log(`Server On Port ${this.app.get("port")}`);
  }
}

/* Ejecutando La Clase */
new App(express());
