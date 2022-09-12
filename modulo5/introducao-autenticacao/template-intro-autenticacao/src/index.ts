import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { Authenticator} from "./services/Authenticator"
import {AuthenticationData} from "./types"


app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)

//a) Qual a sua opinião em relação a usar strings para representar os ids? 
//Você concorda que seja melhor do que usar números?

//Sim pois é uma das formas de se gerar ID com UUId baixas possibildiades de ter uma igual 
// Exemplo: Se você gerar 1 bilhão de UUIDs por segundo durante 100 anos,
//existe a chance de 50% de existir uma colisão

//a) Sstá inserindo os dados id, email, password na tabela user

//b) como já possuo na to_do_list_users apenas alterei a tabela e inclui password



//3 exercicio
//a) as string serve para confirmar ao typescript que a respostá sera string.

/* 

const id:AuthenticationData = {id: "L0X"}
const tokenInstanciado = new Authenticator()
const token = tokenInstanciado.generateToken(id)

console.log(`TOKEN:`,token)

const tokenData = tokenInstanciado.getTokenData(token)

console.log(`Token Data:`, tokenData) */