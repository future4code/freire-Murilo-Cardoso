import { ShowInputDTO } from "../models/Show"
import { AuthenticationError } from "../errors/AuthenticationError"
import {Authenticator} from "../services/Authenticator"
import { USER_ROLES } from "../models/User"
import ShowDatabase from "../database/ShowDatabase"

class ShowBusiness {



public create = async (input:ShowInputDTO) => {
    const {token, band, startsAt} = input

    if(!token ){
        throw new AuthenticationError("Token inválido ou faltando") 
    }
    
    const payload = new Authenticator().getTokenPayload(token)

    if(!payload){
        throw new AuthenticationError("Usuario não encontrado")
    }

    if(payload.role !== USER_ROLES.ADMIN){
        throw new AuthenticationError("Somente admin pode criar shows")
    }

    const startAtDate = new Date(startsAt)

    const festivalStartDate = new Date("2022/12/05")

    if(startAtDate < festivalStartDate) {
        throw new Error ("A data do show não pode ser anterior a 2022/12/05")
    }

    const showDatabase = new ShowDatabase()
    const showAlreadyExist = await showDatabase.findShowByDate(startAtDate)

}

}

export default ShowBusiness