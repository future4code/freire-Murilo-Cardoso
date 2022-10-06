import { Router } from "express";
import ShowBusiness from "../business/ShowBusiness";
import ShowController from "../controller/showController";
import ShowDatabase from "../database/ShowDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { userRouter } from "./userRouter";


export const showRouter = Router()

const showController = new ShowController(
    new ShowBusiness(
        new ShowDatabase(),
        new IdGenerator(),
        new Authenticator()
    )
)

showRouter.post("/create",showController.create )
showRouter.get("/Allshows",showController.getShows)
showRouter.post("/ticket/:id",showController.buyTicket )
showRouter.delete("/ticket/:id",showController.deleteTicket)