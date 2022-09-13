import { Request,Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";

export default async function login(
    req: Request,
    res: Response
):Promise<void>{

    try {

        const {email, password} = req.body

        //verificação se o usuário preencheu email e senha.
        if(!email || !password){
            res.statusCode= 422
            throw new Error(`Preencha o "email" ou "senha"`)
        }

        //descontruindo o array de user e conectando no banco "onde" no email
        const [user] = await connection('to_do_list_users').where({email})

        if(!user || user.password !==password) {
            res.statusCode= 409
            throw new Error ('Credenciais inválidas')
        }

        //instanciando o token e gerando ele pelo id
        const newToken = new Authenticator()
        const token = newToken.generateToken({id: user.id})

        res.status(200).send({token})

    } catch (error:any) {
        res.status(500).send(error.message)
    }
}