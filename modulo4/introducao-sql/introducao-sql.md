
EXERCÍCIO 1

*a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*

Resposta: Foi usado *CREATE TABLE* para criar a tabela, *PRIMARY KEY* para identificador único, 
*VARCHAR(255)* - para designar as strings de no máximo "255" caracteres
*NOT NULL* para reforçar a necessidade de se informar o dado na tabela, não poderá ser deixado em branco.
*DATE* para data informar o valor de data. 


*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*


SHOW TABLES

Mostra o resultado dos dados em formato de tabela.


SHOW DATABASES 

Para obter uma lista de todas as tabelas e visualizações no banco de dados atual:
listado todos os bancos de dados até mesmo os utilizados pelo MySQL.
Mostra as tabelas que existem em produção.



*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*

Abriu uma tabela mostrando cada detalhe, uma descrição sobre a tabela que criamos chamada "Acrtor"


'id', 'varchar(255)', 'NO', 'PRI', NULL, ''
'name', 'varchar(255)', 'NO', '', NULL, ''
'salary', 'float', 'NO', '', NULL, ''
'birth_date', 'date', 'NO', '', NULL, ''
'gender', 'varchar(6)', 'NO', '', NULL, ''


EXERCÍCIO 2
*a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*

```sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "002", 
    "Gloria Pires",
    1200000,
    "1963-08-23", 
    "female"
);
```
b) *Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*

O erro ocorreu pois foi passado o mesmo valor de ID e não pode. 

A coluna de chave primária é exclusiva e não aceitará a entrada duplicada. Então, quando você está tentando inserir uma nova linha que já está presente em sua tabela, produzirá esse erro.

*Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta*

    
```sql
    INSERT INTO Actor (id, name, salary)
    VALUES(
      "003", 
      "Fernanda Montenegro",
      300000,
      "1929-10-19", 
      "female"
    );
```

O erro aconteceu pois foi passado mais de 3 valores para inserir na tabela. Se observar tem "id" "name" "salary" apenas. E dentro do VALUE existe 5 atribuições.

Para corrigir add os VALUES que faltavam no parametro "birth_date, gender"
    

    
```sql
    INSERT INTO Actor (id, salary, birth_date, gender)
    VALUES(
      "004",
      400000,
      "1949-04-18", 
      "male"
    );
```

Não foi passado o "name" que é um valor de coluna constante NOT NULL
    
Para corrigir foi add "name" ao parametro e uma VALUE de "Name" em sting.


```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```
Já está operação tentou usar a data de nascimento sem as aspas o correto seria "1979-03-33"


EXERCÍCIO 3 

a) *Escreva uma query que retorne todas as informações das atrizes*

```sql
SELECT * from Actor WHERE gender = "female";
```

b) *Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*

```sql
SELECT name, salary FROM Actor
WHERE name LIKE "%Tony Ramos%"; 
```

c) *Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*

```sql
SELECT * from Actor WHERE gender = "invalid";
```

Não mostrou nada. Somente dados Null



d) *Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*

```sql
SELECT id, name, salary from Actor WHERE salary <= 500000;
```

e) **T*ente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta*

```sql
SELECT id, nome from Actor WHERE id = "002";
```

O erro ocorreu pois foi passado o nome errado, o correto ceria "name"

EXERCÍCIO 4 

Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:

- cujos nomes começam com "A" ou "J"; e
- cujos salários são maiores do que R$300.000

```sql
SELECT * from Actor WHERE name LIKE "A%" OR name LIKE "J%";
```

```sql
SELECT * from Actor WHERE salary > 300000;
```

```sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```



a) *Explique com as suas palavras a query acima*

Selecione todos os atores da tabela Ator onde o nome é semelhante a A ou semelhante a J e o salário é maior que 300000


b) *Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*

```SQL
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;
```

c) *Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.* 

```SQL
SELECT * from Actor WHERE name LIKE "%G%" OR name LIKE "%g%";
```

d) *Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*

```sql
SELECT * from Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;
```

EXERCÍCIO 5

Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)


```sql
CREATE TABLE Films (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT (255) NOT NULL,
	release_date DATE NOT NULL,
    score INT NOT NULL
);
```
```sql
INSERT INTO Films (id, name, synopsis, release_date, score)  
VALUES(
	"002",
    "Se eu fosse você",
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    "7"
);
```
```sql
INSERT INTO Films (id, name, synopsis, release_date, score)  
VALUES(
	"003",
    "Doce de mãe",
	"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    "10"
);
```
```sql
INSERT INTO Films (id, name, synopsis, release_date, score)  
VALUES(
	"004",
    "Dona Flor e Seus Dois Maridos",
	"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-02-11",
    "8"
);

```
```sql
INSERT INTO Films (id, name, synopsis, release_date, score) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    "9"
)
```

EXERCÍCIO 6


Escreva uma query que:

a) Retorne o id, título e avaliação a partir de um id específico;

```sql
SELECT id, name, score FROM Films WHERE id = "004";
```

b) Retorne um filme a partir de um nome específico;

```sql
SELECT * FROM Films WHERE name = "Deus é Brasileiro";
```

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`

```sql
SELECT id, name, synopsis FROM Films WHERE score > 7;
```

EXERCICIO 7 

Escreva uma query que:

a) Retorna um filme cujo título contenha a palavra `vida`


b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.

c) Procure por todos os filmes que já tenham lançado

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.


