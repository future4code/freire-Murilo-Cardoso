import { UserData } from "../types/typeUser";
import { connection } from "./connection";

export default async function insertUser(insertUser: UserData):Promise<string> {

    const {id,name,email, password} = insertUser
    
    await connection("labecommerce_users").insert({
        id,
        name,
        email,
        password
    })
    return `Usuário ${name} criado com sucesso!`
}