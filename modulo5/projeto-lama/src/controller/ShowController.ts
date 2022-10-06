import { Request, Response } from "express"
import { ShowInputDTO, TicketInputDTO } from "../models/Show"
import ShowBusiness from "../business/ShowBusiness"

class ShowController{


    public create = async (req: Request, res: Response) => {
        try {
            const input: ShowInputDTO = {
                token: req.headers.authorization as string,
                band: req.body.band,
                startsAt: req.body.startsAt
            }
            const showBusiness = new ShowBusiness()

            const response = await showBusiness.create(input)

            res.status(201).send(response)
        } catch (error: any) {
            
        }
    }

    public getShows = async (req: Request, res: Response) =>{
        
        try {
            const showBusiness = new ShowBusiness()

            const response = await showBusiness.getShows()
        } catch (error:any) {
            
        }
    }

    public buyTicket = async (req: Request, res: Response) =>{
        
        try {
        
            const input:TicketInputDTO ={
                token: req.headers.authorization!,
                showId: req.params.id  
            }

            const showBusiness = new ShowBusiness()

            const response = await showBusiness.buyTicket(input)

            res.status(201).send(response)

        } catch (error:any) {
            

        }
    }
}

export default ShowController