import { Request, Response } from "express";
import insertAddressDb from "../data/insertAddressDb";
import { getFullAddress } from "../services/getFullAddress";

export const insertAddress = async (req: Request, res: Response) => {
  try {
    const cep = req.params.cep;

    const address = await getFullAddress(cep);
    if (!address || undefined ) {
      throw new Error("Cep Inválido");
    }

    await insertAddressDb(address)
    res.send(200).send("Enderço criado com sucesso")

  } catch(error:any) {
    res.status(500).send(error.message)
  }
};
