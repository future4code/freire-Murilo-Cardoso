import { AddressInfo } from "net";
import app from "./app";
import { createUser } from "./endpoints/createUser";
import createProducts from "./endpoints/createProducts"


//ENDPOINTS 

app.post("/user", createUser)
app.post("/products", createProducts)

//app.get("/users", getUsers)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});