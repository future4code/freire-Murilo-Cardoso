import {app} from "./app"
import { pingRouter } from '../router/pingRouter'
import { userRouter } from '../router/userRouter'
import { UserController } from "./UserController"

const userController = new UserController()

app.post("/criar-usuario", userController.create)


app.use("/ping", pingRouter)
app.use("/users", userRouter)