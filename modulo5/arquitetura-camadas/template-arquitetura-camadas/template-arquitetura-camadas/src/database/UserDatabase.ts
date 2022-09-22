import { BaseDataBase } from "./BaseDataBase"
import { User } from "../models/User"

export class UserDataBase extends BaseDataBase {
    public static TABLE_USERS = "Arq_Users"


    async createUser(user: User): Promise<string> {

        await this.getConnetion().insert({
            id: user.getId(),
            email: user.getEmail(),
            nome: user.getName(),
            senha: user.getPassword(),
            role: user.getRole().toUpperCase()
        }).into(User.tableName)

        return `Usuario cadastrado com sucesso`
    }

    async getUserByEmail(email: string): Promise<User | undefined> {
        const result = await this.getConnetion()
            .select("*")
            .from(User.tableName)
            .where({ email })
            


        if (!result.length) {
            return undefined
        }

        return new User(result[0].id, result[0].nome, result[0].email, result[0].senha, result[0].role)
    } 
    }

/*     async getUserByEmail(email: string): Promise<User | undefined> {
        const result = await this.getConnetion()
            .select("*")
            .from(UserData.tableName)
            .where({ email })
            


        if (!result.length) {
            return undefined
        }

        return new User(result[0].id, result[0].nome, result[0].email, result[0].senha, result[0].role)
    } */
