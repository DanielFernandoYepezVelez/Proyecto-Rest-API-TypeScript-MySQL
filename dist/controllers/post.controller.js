"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
class PostController {
    getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /* Obtengo Una Promesa */
            const conexionPromesa = yield database_1.default;
            /* Aqui La Remato Para Poder Obtener Su Valor Final */
            const postsFinal = yield conexionPromesa.query("SELECT * FROM posts");
            return res.json({
                Posts: postsFinal[0],
            });
        });
    }
    getPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const conexionPromesa = yield database_1.default;
            const postFinal = yield conexionPromesa.query("SELECT * FROM posts WHERE id = ?", [id]);
            return res.json({
                Post: postFinal[0],
            });
        });
    }
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPost = req.body;
            const conexionPromesa = yield database_1.default;
            yield conexionPromesa.query("INSERT INTO posts SET ?", [newPost]);
            return res.json({
                message: "Post Create!",
            });
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const updatePost = req.body;
            const conexionPromesa = yield database_1.default;
            yield conexionPromesa.query("UPDATE posts SET ? WHERE id = ?", [
                updatePost,
                id,
            ]);
            return res.json({
                message: "Post Updated!",
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPost } = req.params;
            const conexionPromesa = yield database_1.default;
            yield conexionPromesa.query("DELETE FROM posts WHERE id = ?", [idPost]);
            return res.json({
                message: "Post Deleted!",
            });
        });
    }
}
const postController = new PostController();
exports.default = postController;
