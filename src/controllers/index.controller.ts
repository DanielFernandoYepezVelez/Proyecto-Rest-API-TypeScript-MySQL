import { Request, Response } from "express";

class IndexController {
  public async index(req: Request, res: Response): Promise<void> {
    res.send("Hola Mundo Desde El Controlador Del INDEX");
  }
}

const indexController = new IndexController();
export default indexController;
