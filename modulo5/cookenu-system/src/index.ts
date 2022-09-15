import app from "./app" 
import signup from "./endpoints/users/signup"
import { getTokenData, generateToken } from "./services/authenticator"


app.post('/user/signup', signup)

app.post('/user/login')
app.get('/user/profile')
app.get('/user/:id/profile')

app.post('/recipe')
app.get('recipe/:id')


/* const token = generateToken({id: "hellou"})

const tokenData = getTokenData(token)

console.log({
    token,
    tokenData
}); */