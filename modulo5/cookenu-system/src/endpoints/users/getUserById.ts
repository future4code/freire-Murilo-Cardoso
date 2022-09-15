import { Request, Response } from "express";
import connection from "../../connection";
import { getTokenData } from "../../services/authenticator";
import { userTableName } from "../../types";


export default async function getUserById(
    req: Request,
    res: Response
):Promise<void>{

    try {

        const token: string = req.headers.authorization as string

        getTokenData(token)

        const [user] = await connection(userTableName)
            .where({ id: req.params.id})

        const { id, email, name } = user
                
        res.send({
            id,
            name,
            email
        })

        
    } catch (error:any) {
        console.log(error.message);

        if(res.statusCode === 200){
        res.status(500).send("Internal server error")
    }else{
        res.send(error.message)
    }
    }
}