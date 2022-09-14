import { purchaseData } from "../types/typePurchase";
import { connection } from "./connection";

export default async function insertPurchase(purchase: purchaseData):Promise<string> {

    const {id, userId,productId,quantity,totalPrice} = purchase

    await connection("labecommerce__purchases").insert({
       id, 
       userId: userId,
       productId: productId,
       quantity,
       totalPrice: totalPrice, 
    })

    return `Compra o ID ${purchase.id} registrada com sucesso!`
}