import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types"

export class Authenticator {

    public generateToken(payload: AuthenticationData){

        const token = jwt.sign({payload},
            "hellou",
            {expiresIn: "1min"})
            return token
    }

    public getTokenData(token:string): AuthenticationData | null{
        try{
            const tokenData = jwt.verify(token,
                "hellou")
                return tokenData as AuthenticationData

        } catch(error:any){
            console.log(error)
            return null 
        }
}
}