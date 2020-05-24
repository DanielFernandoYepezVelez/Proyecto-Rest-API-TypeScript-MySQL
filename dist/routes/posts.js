"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
class PostRoutes {
    constructor(router) {
        this.router = router;
        this.router.get("/", post_controller_1.default.getPosts);
        this.router.get("/:id", post_controller_1.default.getPost);
        this.router.post("/create", post_controller_1.default.createPost);
        this.router.patch("/update/:id", post_controller_1.default.updatePost);
        this.router.delete("/delete/:idPost", post_controller_1.default.delete);
    }
}
const postRouter = new PostRoutes(express_1.Router());
exports.default = postRouter.router;
