import { UserData } from "../types/typeUser";
import { connection } from "./connection";


export default async function selectUser(userId:string): Promise<UserData | undefined>{

    const [result] = await connection("labecommerce_users").select("*").where({id:userId})

    if(result) {
        const userType:UserData = {
            id: result.id,
            name: result.name,
            email: result.email,
            password: result.password
    }
         return userType
} else{
    return undefined
}

}