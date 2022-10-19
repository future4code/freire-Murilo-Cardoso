import { Request, Response } from "express"
import { DeleteTicketInputDTO, ShowInputDTO, TicketInputDTO } from "../models/Show"
import ShowBusiness from "../business/ShowBusiness"

class ShowController{

    constructor(private showBusiness:ShowBusiness){

    }

    public create = async (req: Request, res: Response) => {
        try {
            const input: ShowInputDTO = {
                token: req.headers.authorization as string,
                band: req.body.band,
                startsAt: req.body.startsAt
            }
            
            const response = await this.showBusiness.create(input)

            res.status(201).send(response)
        } catch (error: any) {
            
        }
    }

    public getShows = async (req: Request, res: Response) =>{
        
        try {
            //const showBusiness = new ShowBusiness()

            const response = await this.showBusiness.getShows()
        } catch (error:any) {
            
        }
    }

    public buyTicket = async (req: Request, res: Response) =>{
        
        try {
        
            const input:TicketInputDTO ={
                token: req.headers.authorization!,
                showId: req.params.id  
            }

           // const showBusiness = new ShowBusiness()

            const response = await this.showBusiness.buyTicket(input)

            res.status(201).send(response)

        } catch (error:any) {
            

        }
    }

    public deleteTicket = async(req: Request, res: Response)=>{

            try {
                const input:DeleteTicketInputDTO ={
                    token: req.headers.authorization!,
                    showId: req.params.id  
                }
                
                //const showBusiness = new ShowBusiness()
                const response = await  this.showBusiness.deleteTicket(input)
            } catch (error:any) {
                
            }
    }


}

export default ShowController