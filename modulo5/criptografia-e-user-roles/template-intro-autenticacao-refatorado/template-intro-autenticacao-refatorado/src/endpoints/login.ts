import { Request, Response } from "express";
import connection from "../connection";
import { AuthenticationData, user } from "../types";
import { GenerateId } from "../services/GenerateId";
import { Autheticator } from "../services/Authenticator";

export default async function login(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Preencha seu email e senha");
    }

    const [user] = await connection("to_do_list_users").where({ email });

    if (!user || user.password !== password) {
      res.statusCode = 409;
      throw new Error("Credencias inválidas");
    }

    const newToken = new Autheticator();
    const token = newToken.generateToken({ id: user.id });

    res.status(200).send(token);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
