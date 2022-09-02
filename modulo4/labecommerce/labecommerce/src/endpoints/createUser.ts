import axios from "axios"
import { Request, Response } from "express"
import { User, UserInsert } from "../types/typeUser"
import insertUser from "../data/insertUser"



export const createUser = async (req: Request, res: Response) => {
   
    try{
        //desestruturação 
        const {name, email, password }: User = req.body

        if(!name || !email || !password){
            throw new Error ("Deve passar o nome, email, password!")
        }

        const userInsert: UserInsert = {
        id: Date.now().toString(),
        name,
        email,
        password        
    }


    const anwser = await insertUser(userInsert)

    res.status(201).send({message: anwser})

    } catch(error: any) {
        res.status(500).send({message: error.message})

    }
}