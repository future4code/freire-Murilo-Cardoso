import { BaseDatabase } from "./BaseDatabase";
import { IShowDB, Show, TicketDB } from "../models/Show";
import { isNativeError } from "util/types";

class ShowDatabase extends BaseDatabase {

    public static TABLE_SHOWS = "Template_Lama_Shows"
    public static TABLE_TICKETS = "Template_Lama_Tickets"


    private showModelDB = (show:Show):IShowDB=>{
        const showDB:IShowDB={
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt()
        }
        return showDB 
    }

    public findShowByDate = async(date:Date): Promise<IShowDB | undefined>=>{
        const result: IShowDB[] = await BaseDatabase
        .connection(ShowDatabase.TABLE_SHOWS)
        .select()
        .where({starts_at:date})

        return result[0]
    }

    public findShowById = async(id:string ): Promise<IShowDB | undefined>=>{
        const result: IShowDB[] = await BaseDatabase
        .connection(ShowDatabase.TABLE_SHOWS)
        .select()
        .where({id})

        return result[0]
    }

    
    public createShow = async(show:Show):Promise<void> => {
        const showDB = this.showModelDB(show)

        await BaseDatabase
        .connection(ShowDatabase.TABLE_SHOWS)
        .insert(showDB)
    }

    public getShows = async() =>{
        const result:IShowDB[] = await BaseDatabase
        .connection(ShowDatabase.TABLE_SHOWS)

        const showModel = result.map((show)=>{
            return new Show(show.id, show.band, show.starts_at)
        })
        return showModel
    }

    public getTicketsByShowId = async (id:string ):Promise<number> =>{

        const result = await BaseDatabase
        .connection(ShowDatabase.TABLE_TICKETS)
        .select()
        .where ({show_id:id})

        return result.length
    }


    public findTicket = async (idShow: string, idUser:string ):Promise<TicketDB | undefined> =>{

        const result:TicketDB[] = await ShowDatabase
        .connection(ShowDatabase.TABLE_TICKETS)
        .select()
        .where({
            show_id: idShow, 
            user_id: idUser
        })

        return result[0]
    }

    public createTicket = async (ticket: TicketDB) =>{

        await BaseDatabase.connection(ShowDatabase.TABLE_TICKETS)
        .insert(ticket)
    }

}

export default ShowDatabase