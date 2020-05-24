import { Router } from "express";

import postController from "../controllers/post.controller";

class PostRoutes {
  constructor(public router: Router) {
    this.router.get("/", postController.getPosts);
    this.router.get("/:id", postController.getPost);
    this.router.post("/create", postController.createPost);
    this.router.patch("/update/:id", postController.updatePost);
    this.router.delete("/delete/:idPost", postController.delete);
  }
}

const postRouter = new PostRoutes(Router());
export default postRouter.router;
