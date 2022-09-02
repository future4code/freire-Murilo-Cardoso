import { ProductsData } from "../types/typesProducts";
import { User } from "../types/typeUser";
import { connection } from "./connection";

const typeProducts = (product: any) => {
  const createProducts: ProductsData = {
    id: product.id,
    name: product.name,
    price: product.price,
    image_url: product.image_url,
  };
  return createProducts;
};


export default async function selecAllProducts(): Promise<ProductsData[] | undefined> {
  
    const result = await connection("labecommerce_products");

    const AllProductsType = result.map((product) => {
    return typeProducts(product);
  });

    return AllProductsType

}
