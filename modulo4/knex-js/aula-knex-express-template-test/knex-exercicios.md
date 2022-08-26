a) *Explique como é a resposta que temos quando usamos o `raw`.* 

para poder usar a sintaxe do SQL diretamente no código do JS
retornar a resposta do banco.

exempolo:

const result = await connection.raw(`
SELECT * FROM Actor
`)

retorna:

[
{"name": "Tony Ramos"},
{"name": "Camila Pitanga"},
{"name": "Antônio Fagundes"}
...
],
[
{

b) *Faça uma função que busque um ator pelo nome;*

```js
const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0][0]
  }
```

c) *Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.*

```js
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return count;
};
```
