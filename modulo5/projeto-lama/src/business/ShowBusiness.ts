import { DeleteTicketInputDTO, DeleteTicketOutpurDTO, Show, ShowInputDTO, ShowOutputDTO, ShowsOutputDTO, TicketDB, TicketInputDTO, TicketOutputDTO } from "../models/Show"
import { AuthenticationError } from "../errors/AuthenticationError"
import {Authenticator} from "../services/Authenticator"
import { USER_ROLES } from "../models/User"
import ShowDatabase from "../database/ShowDatabase"
import { IdGenerator } from "../services/IdGenerator"

class ShowBusiness {

    constructor(
        private showDataBase:ShowDatabase,
        private idGenerator:IdGenerator,
        private authenticator:Authenticator
    ){}


    public create = async (input:ShowInputDTO): Promise<ShowOutputDTO> => {
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

        //const showDatabase = new ShowDatabase()
        const showAlreadyExist = await this.showDataBase.findShowByDate(startAtDate)

        if(showAlreadyExist){
            throw new AuthenticationError("Já existe um show neste dia")
        }

        const id = this.idGenerator.generate()
        const show = new Show(id, band, startAtDate)
 
        await this.showDataBase.createShow(show)

        const response: ShowOutputDTO={
            message:`Show de ${show.getBand()} criado com sucesso!`,
            show
        }
        return response
    }

    public getShows = async ():Promise<ShowsOutputDTO> => {
        
        //const showDatabase = new ShowDatabase()

        const showsDB = await this.showDataBase.getShows()

        for(let show of showsDB){
            const ticket  = await this.showDataBase.getTicketsByShowId(show.getId())
            show.setTicket(5000- ticket)
        }
 
        const response:ShowsOutputDTO = {
            shows:showsDB
        }

        return response    
    }

    public buyTicket = async (input:TicketInputDTO):Promise<TicketOutputDTO> => {
        const {token, showId} = input  
        
        if(!token ){
            throw new AuthenticationError("Token faltando") 
        }
        
        const payload = this.authenticator.getTokenPayload(token)

        if(!payload){
            throw new AuthenticationError("Token inválido")
        }

       //const showDatabase = new ShowDatabase()
        const showDB = await this.showDataBase.findShowById(showId)


        if(!showDB){
            throw new AuthenticationError("Show não encontrado ")
        }

        const tickets = await this.showDataBase.getTicketsByShowId(showId)

        const show = new Show(
            showDB.id, 
            showDB.band, 
            showDB.starts_at,
            5000 - tickets
        )

        if(show.getTickets() === 0){
            throw new Error("Ingressos esgotados")
        }
        const isTicketAlreadyExist = await this.showDataBase.findTicket(showId, payload.id)

        if(isTicketAlreadyExist){
            throw new AuthenticationError("Opa! Você já comprou o ingresso para este show.")
        }

        const ticket:TicketDB ={
            id: this.idGenerator.generate(),
            show_id: showId,
            user_id: payload.id 
        }

        await this.showDataBase.createTicket(ticket)


        const response:TicketOutputDTO = {
            message: "Ingresso reservado com sucesso!",
            showDate: show.getStartsAt(),
            band: show.getBand() 
        } 

        return response
    }

    public deleteTicket = async (input:DeleteTicketInputDTO) =>{

        const {token, showId} = input
        
        //validação do token

        if(!token ){
            throw new AuthenticationError("Token faltando") 
        }
        
        const payload = this.authenticator.getTokenPayload(token)

        if(!payload){
            throw new AuthenticationError("Token inválido")
        }


        //const showDatabase = new ShowDatabase()
        
        const showDB = await this.showDataBase.findShowById(showId)

        //validação do show
        if(!showDB){
            throw new AuthenticationError("Show não encontrado ")
        }

        //validação do ticket

        const ticketDB = await this.showDataBase.findTicket(showId, payload.id)

        if(!ticketDB){
            throw new AuthenticationError("Não foi possível deletar o ingresso!")
        }

        await this.showDataBase.deleteTicketById(ticketDB.id)

        const response:DeleteTicketOutpurDTO = {
            message:"ingresso canselado com sucesso!"
        }
        
    }
}

export default ShowBusiness