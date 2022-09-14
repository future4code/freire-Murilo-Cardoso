import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";

export default async function editUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname } = req.body

      const token = req.headers.authorization

      if(!token){
         req.statusCode = 401
         throw new Error("Não autorizado")

      }
      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }

      const getTokenAuthenticator = new Authenticator()
      const tokenData = getTokenAuthenticator.getTokenData(token)


      if(!tokenData){
         res.statusCode = 401
         throw new Error("Token inválido")
      }

      await connection('to_do_list_users')
         .update({ name, nickname })
         .where({ id: tokenData.id })

      res.status(200).send("Editado com sucesso!")

   } catch (error:any) {

      if (res.statusCode === 200) {
         res.status(500).send(error.message || error.sqlMessage)
      }

      res.end()
   }
}