import { Request, Response } from "express";
import { recipeTableName } from "../../types";
import connection from "../../connection";
import { getTokenData } from "../../services/authenticator";

export default async function getRecipeById(
  req: Request,
  res: Response):Promise<void>{
  try {


    const token = req.headers.authorization

    const tokenData = getTokenData(token!)


    //validação se não houver token passado por authorization
    
    if(!tokenData){
        res.statusCode = 401
        throw new Error("Unauthorized")
    }

    const [recipe] = await connection(recipeTableName)
    .where({id: req.params.id})

    //validação
    if(!recipe){
      res.statusCode = 404
      throw new Error("Recipe not found")
    }

    res.send({ 
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      createdAt: recipe.created_at
    })

  } catch (error: any) {
    console.log(error.message)

    if (res.statusCode == 200) {
      res.status(500).send("Internal server error")
    } else {
      res.send(error.message)
    }
  }
}
