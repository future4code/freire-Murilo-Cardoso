import { Request, Response } from "express";
import connection from "../../connection";
import { generateToken } from "../../services/authenticator";
import { generateHash } from "../../services/hashManager";
import generateId from "../../services/IdGenerator";
import { userTableName } from "../../types";

export default async function signup(
    req: Request,
    res: Response
): Promise<void> {

try {

    //descontrução do body 
    const { name, email, password } = req.body


    //validação
    if(!name || !email || !password){
        res.statusCode = 422
        throw new Error("name, email, and password required")
    }

    if(password.length < 6){
        res.statusCode = 422
        throw new Error("must be at least 6 character long")
    }

    const user = await connection(userTableName)
    .where({email})

    if(user){
        res.statusCode = 409
        throw new Error("email already in use")
    }

    
    //variavel para gerar o "id" passando string como tipagem
    const id: string = generateId()


    //criando a variavel para hash(criptografar) a senha
    const cypherPassword: string = generateHash(password)


    //chamando a tabela pelo connection. variavel "useTableName" e inserindo as info do usuário
    await connection(userTableName)
    .insert({id,name,email,password: cypherPassword})

    //gerando o token,passando o payload "id"
    const token: string = generateToken({id})

    //enviando o token como resposta
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