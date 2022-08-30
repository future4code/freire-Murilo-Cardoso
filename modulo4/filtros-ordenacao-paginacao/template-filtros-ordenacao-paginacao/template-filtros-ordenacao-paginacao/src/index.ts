import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getUserByNames } from "./endpoints/getUserByNames";
import { getTypeByParams } from "./endpoints/getTypeByParams";


export const app = express()

app.use(express.json())
app.use(cors())


app.get("/type/:type", getTypeByParams)

app.get("/names", getUserByNames)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})