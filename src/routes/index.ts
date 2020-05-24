import { Router } from "express";

import indexController from "../controllers/index.controller";

class IndexRoutes {
  constructor(public router: Router) {
    this.router.get("/", indexController.index);
  }
}

const indexRouter = new IndexRoutes(Router());
export default indexRouter.router;
