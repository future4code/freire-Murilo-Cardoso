import { Router } from "express";
import ShowController from "../controller/showController";
import { userRouter } from "./userRouter";


export const showRouter = Router()

const showController = new ShowController()


userRouter.post("/create",showController.create )