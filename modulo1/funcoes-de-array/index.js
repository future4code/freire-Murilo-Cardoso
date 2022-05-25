//Exercicios Aula - Callback e Funcções de Array

//1-
//A) Será impresso uma nova array identica a array "usuarios"
//2-
//A) Será impresso a array novamente porém somente o Nome
///
//3-Será impresso os nomes com os os apelidos, mas será ocultado o nome com o apelido de "chijo"


//- **Exercícios de escrita de código**

//1
 /*  1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:** */
    
    
/*     const pets = [
       { nome: "Lupin", raca: "Salsicha"},
       { nome: "Polly", raca: "Lhasa Apso"},
       { nome: "Madame", raca: "Poodle"},
       { nome: "Quentinho", raca: "Salsicha"},
       { nome: "Fluffy", raca: "Poodle"},
       { nome: "Caramelo", raca: "Vira-lata"},
    ]
    
        const cachorrinhosClientes = pets.map((item, index, array) =>{
            console.log(item, index, array) */
         /*    a) Crie um novo array que contenha apenas o nome dos doguinhos

            b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)
            
            c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!" */
        
        
    // //RESPOSTA a) Crie um novo array que contenha apenas o nome dos doguinhos
/*     const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
     ]
    const cachorrinhosClientes = pets.map((item) => {
        return item.nome

    })
     console.log(cachorrinhosClientes)
 */
// //RESPOSTA b) Crie um novo array apenas com os [cachorros salsicha]
// item B

//[
 // { nome: "Lupin", raca: "Salsicha"},
// { nome: "Quentinho", raca: "Salsicha"}
 //]
//

/*     const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
    ]
    const cachorrinhosClientes = pets.filter((tipo) => {
        return tipo.raca === "Salsicha"
    })       
        console.log(cachorrinhosClientes) */
 
// RESPOSAT c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!" */

/* const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
]
const cachorrinhosClientes = pets.filter((tipo, index, array) => {
        return tipo.raca === "Poodle"
        
})
const imprimirMensagemNoConsole = cachorrinhosClientes.map((pet) => {

        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`
})
    console.log(imprimirMensagemNoConsole)
 */



   //2- Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
      const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]  
 
    //a) Crie um novo array que contenha apenas o nome de cada item
/*     const nomeItens = produtos.map((produto) => {
        return produto.nome

    })
    console.log(nomeItens) */
 
    //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
     const nomePreco = produtos.map((item) => {
        const porcentagem = item.preco * 0.05;
        const desconto = item.preco - porcentagem;
        return `${item.nome} ${desconto}`;
    });
    console.log(nomePreco)
    
 //Resultados esperados em cada item 
  //// item A
//[
    /* "Alface Lavada", 
    "Guaraná 2l",
    "Veja Multiuso",
    "Dúzia de Banana", 
    "Leite", 
    "Cândida", 
    "Detergente Ypê", 
    "Vinho Tinto", 
    "Berinjela kg", 
    "Sabão em Pó" */
  //]
  
  // item B
 /*  [
     { nome: "Alface Lavada", preço: 2.38 },
     { nome: "Guaraná 2l", preço: 7.13 },
     { nome: "Veja Multiuso", preço: 11.97 },
     { nome: "Dúzia de Banana", preço: 5.42 },
     { nome: "Leite", preço: 2.84 },
     { nome: "Cândida", preço: 3.14 },
     { nome: "Detergente Ypê", preço: 2.09 },
     { nome: "Vinho Tinto", preço: 52.25 },
     { nome: "Berinjela kg", preço: 8.54 },
     { nome: "Sabão em Pó Ypê", preço: 10.26 }
  ] */
  
  // item C
  /* [
     { nome: "Guaraná 2l", categoria: "Bebidas", preço: 7.8 },
     { nome: "Leite", categoria: "Bebidas", preço: 2.99 },
     { nome: "Vinho Tinto", categoria: "Bebidas", preço: 55 }
  ] */
  
  // item D
  /* [
     { nome: "Detergente Ypê", categoria: "Limpeza", preço: 2.2 },
     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preço: 10.80 }
  ]
   */
  // item E

  