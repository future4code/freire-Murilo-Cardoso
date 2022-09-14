import axios from "axios"
import { Request, Response } from "express"
import selectAllUsers from "../data/seletctUsers"
import selectUsers from "../data/seletctUsers"

export const getAllUsers = async (req: Request, res: Response) => {
   
    try{
        const AllUsers = await selectUsers()

        if(!AllUsers?.length){
            throw new Error("Não há usuário cadastrado")
        }
        
        res.status(200).send(AllUsers)

    } catch(error:any){
        res.status(500).send({message:error.message})
    }
}