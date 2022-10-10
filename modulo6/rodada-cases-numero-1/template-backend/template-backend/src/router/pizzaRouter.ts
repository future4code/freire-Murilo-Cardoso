import { Router } from "express"
import { PizzaBusiness } from "../business/PizzaBusiness"
import { PizzaController } from "../controller/PizzaController"
import { PizzaDataBase } from "../database/PizzaDatabase"
import { IdGenerator } from "../services/IdGenerator"

export const pizzaRouter = Router()

const pizzaController = new PizzaController(
    new PizzaBusiness(
        new PizzaDataBase(),
        new IdGenerator()
    )
)


pizzaRouter.get("/", pizzaController.getPizzas)
