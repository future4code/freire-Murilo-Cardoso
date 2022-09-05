import { Request, Response } from "express";
import selecAllProducts from "../data/selectAllProducts";
import selectUser from "../data/selectUser";
import selectProduct from "../data/selectProduct";
import { purchaseData } from "../types/typePurchase";
import insertPurchase from "../data/insertPurchase";


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


        const totalPrice = productAlreadyExist.price * quantity;

        const purchase: purchaseData = {
            id: Date.now().toString(),
            userId,
            productId,
            quantity,
            totalPrice
        }

        const answer = await insertPurchase(purchase)

        res.status(201).send({message: answer})

    }catch(error:any){
        res.status(500).send({message: error.message})
    }
}