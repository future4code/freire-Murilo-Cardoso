import app from "./app" 
import { getTokenData, generateToken } from "./services/authenticator"



app.get('/')

const token = generateToken({id: "hellou"})

const tokenData = getTokenData(token)

console.log({
    token,
    tokenData
});