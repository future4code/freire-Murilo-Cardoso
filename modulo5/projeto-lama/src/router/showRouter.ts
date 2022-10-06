import { Router } from "express";
import ShowController from "../controller/showController";
import { userRouter } from "./userRouter";


export const showRouter = Router()

const showController = new ShowController()


showRouter.post("/create",showController.create )
showRouter.get("/Allshows",showController.getShows)
showRouter.post("/ticket/:id",showController.buyTicket )