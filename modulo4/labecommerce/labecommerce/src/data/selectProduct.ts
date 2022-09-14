import { ProductsData } from "../types/typesProducts";
import { connection } from "./connection";

export default async function selectProduct(productId:string):Promise<ProductsData | undefined>{

    const [result] = await connection("labecommerce_products").select("*").where({id:productId})

    if(result) {
        const productType:ProductsData = {
            id: result.id,
            name: result.name,
            price: result.price,
            image_url: result.image_url
    }
         return productType
} else{
    return undefined
}

}