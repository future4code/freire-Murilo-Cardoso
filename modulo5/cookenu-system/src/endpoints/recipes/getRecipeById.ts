import { Request, Response } from "express";
import { getTokenData } from "../../services/authenticator";


export default async function getRecipeById(req: Request, res: Response) {
  try {

    const token: string = req.headers.authorization as string

    getTokenData(token)
    

  } catch (error: any) {
    console.log(error.message);

    if (res.statusCode == 200) {
      res.status(500).send("Internal server error");
    } else {
      res.send(error.message);
    }
  }
}
