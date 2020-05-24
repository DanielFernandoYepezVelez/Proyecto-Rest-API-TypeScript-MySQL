import { Request, Response } from "express";

import connect from "../config/database";
import { Post } from "../interface/Post";

class PostController {
  public async getPosts(req: Request, res: Response): Promise<Response<JSON>> {
    /* Obtengo Una Promesa */
    const conexionPromesa = await connect;
    /* Aqui La Remato Para Poder Obtener Su Valor Final */
    const postsFinal = await conexionPromesa.query("SELECT * FROM posts");
    return res.json({
      Posts: postsFinal[0],
    });
  }

  public async getPost(req: Request, res: Response): Promise<Response<JSON>> {
    const { id } = req.params;

    const conexionPromesa = await connect;
    const postFinal = await conexionPromesa.query(
      "SELECT * FROM posts WHERE id = ?",
      [id]
    );

    return res.json({
      Post: postFinal[0],
    });
  }

  public async createPost(
    req: Request,
    res: Response
  ): Promise<Response<JSON>> {
    const newPost: Post = req.body;

    const conexionPromesa = await connect;
    await conexionPromesa.query("INSERT INTO posts SET ?", [newPost]);

    return res.json({
      message: "Post Create!",
    });
  }

  public async updatePost(
    req: Request,
    res: Response
  ): Promise<Response<JSON>> {
    const { id } = req.params;
    const updatePost: Post = req.body;

    const conexionPromesa = await connect;
    await conexionPromesa.query("UPDATE posts SET ? WHERE id = ?", [
      updatePost,
      id,
    ]);

    return res.json({
      message: "Post Updated!",
    });
  }

  public async delete(req: Request, res: Response): Promise<Response<JSON>> {
    const { idPost } = req.params;

    const conexionPromesa = await connect;
    await conexionPromesa.query("DELETE FROM posts WHERE id = ?", [idPost]);

    return res.json({
      message: "Post Deleted!",
    });
  }
}

const postController = new PostController();
export default postController;
