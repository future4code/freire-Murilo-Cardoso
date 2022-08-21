import express, {Express, Request, Response} from "express"
import cors from "cors"
import { accounts } from "./accounts"

const app: Express= express()

app.use(express.json())
app.use(cors())


app.post("/users/create", (req: Request, res: Response)=>{
    try{
    const {name, CPF, dateBirthAsString}= req.body //desestruturação
    
    const [day, month, year] = dateBirthAsString.split("/")
    
    const dateBirth: Date = new Date(`${year}-${month}-${day}`)

    const ageInMilisseconds : number = Date.now() - dateBirth.getTime()

    const ageInYears: number = ageInMilisseconds / 1000 /60 /60 /24 /365

    if(ageInYears < 18) {
        res.statusCode = 406
        throw new Error("Idade deve ser maior que 18 anos")
    }

    accounts.push({
        name,
        CPF,
        dateBirth,
        balance: 0,
        statement: []
    })

    res.status(201).send("Conta criada com sucesso!")
    } catch(error: any) {
        console.log(error)
        res.send(error.message)
    }
})

app.get("/users/all",(req: Request, res: Response)=>{
    try{
        if(!accounts.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }
        res.status(200).send(accounts)
    } catch (error: any) {
        res.send(error.message)
    }
})
app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003")
})