import { User, userDTO, USER_ROLES } from "../models/User";
import { MissingFields } from "../error/MissingFields";
import { UserDataBase } from "../database/UserDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

//regra de negócio

class UserBusiness {

  async create(userDTO: userDTO){
    
    const {nome, email, password,role} = userDTO 

    if(!nome || !email || !password || !role){
        throw new MissingFields()
    }

    if (password.length < 6) {
        throw new Error("A senha deve conter no minimo 6 caracteres")
    }
    
    if (role.toUpperCase() !== USER_ROLES.NORMAL && role.toUpperCase() !== USER_ROLES.ADMIN) {
        throw new Error("Usuario só pode ser do tipo normal ou admin")
    }
    
    const userData = new UserDataBase()

    const emailAlreadyExit = await userData.getUserByEmail(email)

    if (emailAlreadyExit) {
        throw new Error("Email ja cadastrado")
    }

    const id = new IdGenerator().generate();

    const hashPassword = await new HashManager().hash(password)

    const user = new User(id, nome, email, hashPassword, role)

    const response = await userData.createUser(user)

    const token = new Authenticator().generateToken({ id, role })

    return token
/* 
    

    const userData = new UserData()



    // -------------------------------- // 

    const id = new IdGenerator().idGenerator();

    const hashPassword = await new HashManager().hash(senha)

    const user = new User(id, nome, email, hashPassword, role)


    const response = await userData.createUser(user)

    const token = new Authenticator().generateToken({ id, role })

    return token

}

async login(email:string,senha:string):Promise<string>{

    if (!email || !senha) {
      
        throw new MissingFields()
    }

    const userData = new UserData()

    const userDB = await userData.getUserByEmail(email)

    if (!userDB) {
        throw new Error("Email não cadastrado na aplicação")
    }

    const correctPassword = await new HashManager().compare(senha, userDB.getSenha())

    if (!correctPassword) {
        throw new Error("A senha esta incorreta")
    }

    const token = new Authenticator().generateToken({ id: userDB.getId(), role: userDB.getRole() })

    return token
}

async getProfile(token:string):Promise<UserBD>{

    if (!token) {
        throw new TokenNotPass()
    }

    const userToken = new Authenticator().getTokenData(token)

    const userData = new UserData()

    const result = await userData.getUserById(userToken.id)

    if (!result.length) {
       throw new Error("Usuario não existe")
    }

    const user: UserBD = {
        id: result[0].id,
        nome: result[0].nome,
        email: result[0].email
    }
 */
}

}

export default UserBusiness