import express, { Application } from "express";
import morgan from "morgan";

class App {
  app: Application;

  constructor() {
    this.app = express();
    this.init();
  }

  public init(): void {
    this.middlewares();
    this.start();
  }

  public settings(): void {
    this.app.set("port", process.env.PORT || 3000);
  }

  public middlewares(): void {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  public async start(): Promise<void> {
    this.settings();
    await this.app.listen(this.app.get("port"));
    console.log(`Server On Port ${this.app.get("port")}`);
  }
}

/* Ejecutando La Clase */
new App();
