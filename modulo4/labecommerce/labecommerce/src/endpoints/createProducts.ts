import { Request, Response } from "express";
import { ProductsData, ProductsInsert } from "../types/typesProducts";
import insertProduct from "../data/insertProduct";

export default async function createProducts(req: Request, res:Response){

    try{
        const {name, price ,image_url}: ProductsInsert = req.body

        if(!name || !price || !image_url){
            throw new Error(`Os valores de "name", "price" e "image" devem ser passados`)
        }

        const productsData: ProductsData = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }
        
        const anwser = await insertProduct(productsData)
        res.status(201).send({message: anwser})


    } catch(error:any){
        res.status(500).send({message: error.message})
    }

}