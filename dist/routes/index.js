"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = __importDefault(require("../controllers/index.controller"));
class IndexRoutes {
    constructor(router) {
        this.router = router;
        this.router.get("/", index_controller_1.default.index);
    }
}
const indexRouter = new IndexRoutes(express_1.Router());
exports.default = indexRouter.router;
