Exercício 1

A) Deleta a coluna salário
B) Redeclara o nome "gender" para "sex" na coluna
C) também porém aumenta os caractéresc do VARCHAR

Exercício 2

a) *Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`*

```sql
UPDATE Actor
SET 
name = "Godofedo Lopes",
birth_date =  "1999-08-25"
WHERE id = "003";

```


b) *Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.*

```sql
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```
```sql
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```


c) *Escreva uma query que atualize todas as informações do ator com o id `005`*

```sql
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";
```

d) *Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado*

```sql
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";
```
Da um erro.

Exercicio 3

a)

```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
b)

```sql
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
```

Exercicio 4

a)
```sql
SELECT MAX(salary) FROM Actor
```
b)
```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female"
```
c)
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```
d)

```sql
SELECT AVG(salary) FROM Actor
```

Exercicio 5

a) A query abaixo

```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

pegou, contou e agrupou o sexo que se chama na categoria "gender" masculino e feminino e mostrou a quantidade que existe.

b)
```sql
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c)
```sql
SELECT * FROM Actor
ORDER BY salary;
```

d)

```sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e)
```sql
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

Exercicio 6 

a)

```sql
ALTER TABLE Films ADD playing_limit_date DATE;
```

