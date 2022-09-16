import { Request, Response } from "express";
import connection from "../../connection";
import { getTokenData } from "../../services/authenticator";
import generateId from "../../services/IdGenerator";
import { recipeTableName } from "../../types";

export default async function createRecipe(req: Request, res: Response) {
  try {

    
    const token = req.headers.authorization
    const {title, description } = req.body

    const tokenData = getTokenData(token!)

    //gerador de Id para a receita
    const id: string = generateId()

    //criação de uma variavle com Data
    const createdAt = new Date()
    console.log(createdAt)

    //o "!" é para avisar ao typescript que o retorno será uma string e não undefined
    await connection(recipeTableName)
    .insert({
        id,
        title,
        description,
        created_at: createdAt,
        author_id: tokenData!.id
    })

    res.send("Recipe succesfuly created!")

  } catch (error: any) {
    console.log(error.message);

    if (res.statusCode == 200) {
      res.status(500).send("Internal server error");
    } else {
      res.send(error.message);
    }
  }
}
