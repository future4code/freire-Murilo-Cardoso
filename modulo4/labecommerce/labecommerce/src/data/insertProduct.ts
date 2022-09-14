import { ProductsData } from "../types/typesProducts";
import { connection } from "./connection";

export default async function insertProduct(product: ProductsData): Promise<string>{
    
    const{id,name,price,image_url} = product

    await connection("labecommerce_products").insert({
        id,
        name,
        price,
        image_url
    })
    return `O produto ${name} foi criado com sucesso!`
}