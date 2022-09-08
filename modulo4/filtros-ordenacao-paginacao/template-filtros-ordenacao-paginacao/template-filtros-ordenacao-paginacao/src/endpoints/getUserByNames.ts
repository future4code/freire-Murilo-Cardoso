import { Request, Response } from "express"
import { connection } from "../data/connection";
import { user } from "../types";

//exercicio1
//a
export const getUserByNames = async(req: Request,res: Response): Promise<void> =>{
    try {
       const name = req.query.name;
       const result = await connection("aula48_exercicio")
       .where("name", "like", `%${name}%`); 
 
       const users = result.map(toUsers);

       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 const toUsers = (input: any): user => {
   return {
     id: input.id,
     name: input.name,
     email: input.email,
     type: input.type,
   };
 };
 