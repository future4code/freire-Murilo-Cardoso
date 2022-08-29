import { Request, Response } from "express"
import selectTaskeById from "../data/selectTaskById"

export default async function getTaskById(
    req: Request,
    res: Response
){
    try {
        const result = await selectTaskeById(req.params.id)
        
        if(!result){
            res.status(404).send({
                message: "tarefa não encontrada"
            }) 
            return
        }

        res.status(200).send(result)

    } catch (error:any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}