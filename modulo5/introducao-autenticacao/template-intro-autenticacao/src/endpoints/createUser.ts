import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { AuthenticationData, user } from "../types";



export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
      //requisição para não aceitar sem não tiver email ou sem @ 
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("Invalid email");
      }

      //senha com 6 digitos ou mais
      if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Invalid password");
       }


      //instanciou o class
      const uuidClass = new GenerateId()
      const id: string = uuidClass.generateId()



      const newUser: user = { id, name, nickname, email, password }

      await connection('to_do_list_users')
         .insert(newUser)

      const newToken = new Authenticator()
      const token= newToken.generateToken({id})      



      res.status(201).send({ newUser, token })

   } catch (error:any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: error.message})
      } else {
         res.send({ message: error.message })
      }
   }
}