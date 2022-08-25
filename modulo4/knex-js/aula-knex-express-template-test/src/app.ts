import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import connection from './connection';


console.log("[Freire] Conectando ao banco");

const app = express()
app.use(express.json())
app.use(cors())


app.get('/name', async (req,res) =>{

    try {
        const result = await connection.raw(`
            SELECT * FROM Films;        
        `)
       
        res.status(200).send(result[0])
        
    } catch (error: any) {
        res.status(500).send( error.sqlMessage || error.message)
    }})


const server = app.listen (3003,()=>{
    if (server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    }else{
        console.error(`Failure upon starting server.`)
    }
})