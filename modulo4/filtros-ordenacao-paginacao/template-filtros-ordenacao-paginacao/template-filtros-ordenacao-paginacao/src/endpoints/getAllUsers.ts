import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
     const name = req.query.name;

     if (name === "") {
      throw new Error("Nome é obrigatório");
    } 

    const result = await connection("aula48_exercicio")
      .select("name", "type")
      .where("name", "like", `%${name}%`); 

    const users = result.map(toUsers);

     if (users.length < 1) {
      throw new Error("Nenhum nome encontrado");
    } 
    res.status(200).send(users);
  } catch (error: any) {
    res.status(500).send({
      messege: error.messege || "Opa, aconteceu um erro inesperado",
    });
  }
}

const toUsers = (input: any): user => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    type: input.type,
  };
};
