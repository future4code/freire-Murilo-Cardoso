import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

console.log("[Freire] Conectando ao banco");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/actors", async (req, res) => {
  try {
    const result = await connection.raw(`
            SELECT * FROM Actor;        
        `);
    res.status(200).send(result[0]);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.get("/name", async (req, res) => {
  try {
    const result = await connection.raw(`
            SELECT name FROM Actor;
        `);
    res.status(200).send(result[0]);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.post("/create/actor", async (req, res) => {
  try {
    await connection.raw(`
        INSERT INTO Actor
        (id, name, salary, birth_date, gender)
        VALUES (
        ${Date.now().toString()},
        "${req.body.name}",
        ${req.body.salary},
        "${req.body.birth_date}",
        "${req.body.gender}"
        );
`);
    res.status(201).send("Success!");
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("An unexpected error occurred");
  }
});

const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `);
  return result[0][0];
};

app.get("/actors/:id", async (req, res) => {
  try {
    const id = req.params.id;

    console.log(await searchActor(id));

    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});

//função sintaxe com query builder que atualiza o actor

app.put("/actor/:id", async (req, res) => {
  try {
    await connection("Actor")
      .update({
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.birthDate,
        gender: req.body.gender,
      })
      .where({ id: req.params.id });
    res.send("Success!");
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("An unexpected error occurred");
  }
});

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
