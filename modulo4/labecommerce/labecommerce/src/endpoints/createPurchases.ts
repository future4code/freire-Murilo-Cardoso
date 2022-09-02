import { Request, Response } from "express";
import selecAllProducts from "../data/selectAllProducts";
import selectUser from "../data/selectUser";
import selectProduct from "../data/selectProduct";

export default async function createPurchases(req:Request, res:Response) {

    try{
        const {userId, productId, quantity}= req.body

        if(!userId || !productId || !quantity){
            throw new Error(`Preencha os valores! "userId, "productId", "quantity"`)
        }

        const userAlreadyExist = await selectUser(userId)

        if(!userAlreadyExist){
            throw new Error(`Usuário ${userId} não foi encontrado`)
        }

        const productAlreadyExist = await selectProduct(productId)

        if(!productAlreadyExist){
            throw new Error(`Produto ${productId} não foi encontrado`)
        }

    }catch(error:any){
        res.status(500).send({message: error.message})
    }
}