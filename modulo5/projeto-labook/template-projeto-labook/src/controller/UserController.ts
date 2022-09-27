import { UserBusiness } from "../business/UserBusiness";
import { Request, Response} from "express";
import { ISignupInputDB } from "../models/User";


export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public signup = async (req: Request, res: Response )=>{
        try {

            const {name, email, password} = req.body

            const input:ISignupInputDB = {
                name,
                email,
                password
            }

            const response = await this.userBusiness.signup(input)

            res.status(201).send(response)

        } catch (error:any) {
            res.status(error.statusCode || 500).send({message:error.message})
        }
    }
}