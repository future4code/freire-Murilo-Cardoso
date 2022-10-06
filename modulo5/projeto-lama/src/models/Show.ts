
export interface ShowInputDTO {
    token: string,
    band:  string,
    startsAt: string,
}

export interface ShowOutputDTO{
    message: string,
    show: Show
}

export interface ShowsOutputDTO{
    shows:Show[]
}

export interface TicketInputDTO{
    token:string,
    showId:string 
}

export interface TicketOutputDTO{
    message: string, 
    showDate: Date,
    band: string 
}

export interface TicketDB{
    id:string
    show_id:string,
    user_id:string
}

export interface IShowDB{

    id:string,
    band:string,
    starts_at: Date

}

export class Show {  
    constructor(
        private id:string,
        private band: string,
        private startsAt: Date,
        private tickets:number = 5000
    ){}
        
    public getId = ()=>{
        return this.id
    }

    public getBand = ()=>{
        return this.band
    }

    public getStartsAt = ()=>{
        return this.startsAt
    }

    public getTickets = ()=>{
        return this.tickets
    }


    public setTicket = (newTicket:number)=>{
        this.tickets = newTicket
    }
}

