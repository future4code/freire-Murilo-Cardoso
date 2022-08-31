import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export default async function selectAllAdress() {

    const result = await connection("aula_servicos_adress")
    .select("*")
    return result

}