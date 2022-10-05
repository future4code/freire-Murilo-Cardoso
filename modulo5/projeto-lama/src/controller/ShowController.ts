import { Request, Response } from "express"
import { ShowInputDTO } from "../models/Show"
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
}

export default ShowController