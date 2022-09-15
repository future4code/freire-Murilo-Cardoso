import { Request, Response } from "express";
import connection from "../../connection";
import { compareHash } from "../../services/hashManager";
import { userTableName } from "../../types";
import { generateToken } from "../../services/authenticator";


export default async function login(
    req: Request,
    res: Response
):Promise<void>{

    try {
        //pegar email e senha do body
        const {email, password} = req.body

        //descontruindo o array user conectando com a tabela "onde" no email
        const [user] = await connection(userTableName)
        .where({email})

        //comparando a senha do usuário
        const passwordOk: boolean = compareHash(password, user.password)

       //se não estiver ok a senha "erro!" 
       if (!passwordOk){
        res.statusCode = 401
        throw new Error("Invalid credentials")
       }
       

       //gerar token
       const token = generateToken({id:user.id})

       res.send({token})

    } catch (error:any) {
        console.log(error.message);

        if(res.statusCode === 200){
        res.status(500).send("Internal server error")
    }else{
        res.send(error.message)
    }
    }
}