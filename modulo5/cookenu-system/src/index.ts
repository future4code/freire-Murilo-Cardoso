import app from "./app" 
import signup from "./endpoints/users/signup"
import { getTokenData, generateToken } from "./services/authenticator"
import login from "./endpoints/users/login"
import getProfile from "./endpoints/users/getProfile"
import getUserById from "./endpoints/users/getUserById"


app.post('/user/signup', signup)
app.post('/user/login', login)

app.get('/user/profile', getProfile)
app.get('/user/:id/profile', getUserById)

app.post('/recipe')
app.get('recipe/:id')


/* const token = generateToken({id: "hellou"})

const tokenData = getTokenData(token)

console.log({
    token,
    tokenData
}); */