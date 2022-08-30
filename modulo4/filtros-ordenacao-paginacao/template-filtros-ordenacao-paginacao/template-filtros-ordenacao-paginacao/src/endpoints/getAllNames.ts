import { Request, Response } from "express"
import selectNameAllUsers from "../data/selectAllUsers"


export const getAllNames = async(req: Request,res: Response): Promise<void> =>{
    try {
       const name = req.query.name;
       const users = await selectNameAllUsers()
 
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
