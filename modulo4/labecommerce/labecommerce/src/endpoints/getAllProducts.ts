import { Request, Response } from "express"
import selectAllProducts from "../data/selectAllProducts"

export const getAllProducts = async (req: Request, res: Response) => {
      
    try{
        const AllProducts = await selectAllProducts()

     if(!AllProducts?.length){
            throw new Error("Não há produto cadastrado")
        } 
        
        res.status(200).send(AllProducts)

    } catch(error:any){
        res.status(500).send({message:error.message})
    }
}
