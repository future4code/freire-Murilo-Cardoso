import {BaseDatabase} from "../../../src/database/BaseDatabase"
import { IUserDB, User, USER_ROLES } from "../../../src/models/User"

export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "Template_Users"
    public static TABLE_SHOWS = "Template_Lama_Shows"
    public static TABLE_TICEKTS = "Template_Lama_Tickets"
    
    public toUserDBModel = (user: User): IUserDB => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        return userDB
    }

    public findByEmail = async (email: string): Promise<IUserDB | undefined> => {

        switch(email){
            case "incluir email aqui":
                return {
                    id:"incluir id",
                    name: "astrodev",
                    email: "astrodev@gmail.com",
                    password: "passwordaqui",
                    role: USER_ROLES.ADMIN 
                }
                default:
                    return undefined
        }
    }

    public createUser = async (user: User): Promise<void> => {
       
    }
}
