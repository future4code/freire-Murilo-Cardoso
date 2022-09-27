import { UserDatabase } from "../database/UserDatabase"
import { ISignupInputDB } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signup = async(input:ISignupInputDB) => {

        const {name, email, password} = input   

    if(name.length < 3  ){
        throw new Error ("Nome deve conter ao menos 3 caracteres")
    }

    if(password.length < 6  ){
        throw new Error ("Senha deve conter ao menos 3 caracteres")
    }
    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
        throw new Error ("email no formato inválido")
    }

    console.log(input)
    }
}