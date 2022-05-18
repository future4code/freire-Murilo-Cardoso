/* - **Exercícios de interpretação de código**
    
Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
1.  Leia o código abaixo */
//Matheus Nachtergaele
//Virginia Cavendish
//Globo, horario: 14h

//2)
//Juca, 3, SRD
//Juba, 3, SRD
//Jubo, 3 ,SRD

//Espalhamento ou spread 
// Essa sintaxe acessa o objeto e cria uma copia dele ou um array inteiro
//Após a cópia podemos fazer qualquer alteração
//

//3)
//Não entendi 


//Exercícios de escrita de código

/* 1. Resolva os passos a seguir: 
    
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** */

/* // Exemplo de entrada
const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 
 // Exemplo de saída
 "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi" */

/*  const pessoa = {
    nome: "Bruna", //não esqueça da virgula!
    apelidos:["abobora", "batatinha","cenourinha"]
 
}
 console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`) */



 /* b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto */


/* const pessoa = {
    nome: "Bruna", //não esqueça da virgula!
    apelidos:["abobora", "batatinha","cenourinha"]

}
    const novaPessoa = {
        ...pessoa,
        apelidos: ['Carolzinha','Caca',"Lolzinha"]

    }
    console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]} ou ${novaPessoa.apelidos[2]}`) */



/*     //2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações: */

 /*    /1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão` */

  /*   const objetoUm = {
        nome: 'Carlos',
        idade: 25,
        profissão:'Carteiro'

    }

    const objetoDois = {
        nome: 'Denis',
        idade:24,
        profissão:'Programador'
        
    }

    //function objetos(objetoUm, objetoDois)

    const objeto = [`${objetoUm.nome}, ${objetoUm.nome.length}, ${objetoUm.idade}, ${objetoUm.profissão}, ${objetoUm.profissão.length}`]

    const objetoOutro = [`${objetoDois.nome}, ${objetoDois.nome.length}, ${objetoDois.idade}, ${objetoDois.profissão}, ${objetoDois.profissão.length}`]

    console.log(objeto, objetoOutro)
    //console.log(objetoOutro) */



    //3)

/*     3. Resolva os passos a seguir: 
    
    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
    c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
    
    - 💡  Dica
        
       
        💡 Aqui você deve usar o método **push()**
        
        
    d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 
    */

    const carrinho = []

    const frutaUm = {
        nome: "Maça",
        disponibiliade: true
    }

    const frutaDois = {
        nome: "Pera",
        disponibiliade: true
    }
    const frutaTres = {
        nome: "Banana",
        disponibiliade: true
    }
    
    carrinho.push (frutaUm)
    carrinho.push (frutaDois)
    carrinho.push (frutaTres)

    console.log(carrinho)
    
    //function sacolao(frutaUm, frutaDois, frutaTres){
        //let compra1 = carrinho.push(frutaUm.nome, frutaDois.nome, frutaTres.nome);
        //return sacolao  
    
    
    
    //sacolao()
     //sacolao(carrinho)
    


    //console.log(carrinho) */