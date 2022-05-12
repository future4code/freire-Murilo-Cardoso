//EXERCICIOS 

/* - **Exercícios de interpretação de código**
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
    1. Leia o código abaixo */

    //a) 10 e 50
    //b) undefined - Não imprimiria nada pois a função termina após o return.

    //Leia o código abaixo

    //a) Esta função serve para coletar um texto do usuário, deixar o texto em letras minúsculas e retornar true ou false se existir a palavra "cenoura"
    
    //b)  eu gosto de cenoura - true
    //    cenoura é bom pra vista - true
    //    cenouras cresem na terra - false
    //
    //Exercícios de escrita de código
    //
    
    //1. Escreva as funções explicadas abaixo:
    
    /* a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    
    ```
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    ```
    
    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
    
    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template: */



    //RESPOSTAS 

   //A) const pergunta = "quem é você?"
    //const resposta = prompt(pergunta)

    //R: Olá meu nome é Murilo, tenho 27 anos, e moro em Porto Alegre-rs

    //console.log(resposta)

    //2° opção da resposta da a
    
    //let quemSouEu =("Olá meu nome é Murilo, tenho 27 anos, e moro em Porto Alegre-rs")

    //console.log(quemSouEu)

    //B)   
    
    //Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

/*     let nome = prompt("Digite seu nome") //string
    let idade = Number(prompt("Digite sua  idade"))//number
    let cidade = prompt("Digite sua cidade") //string
    let profissao = prompt("qual sua profissão?") //string

    const frase =(`Eu sou, ${nome}, tenho, ${idade} anos, sou ${profissao}`)

    console.log(frase)
 */
    /* 2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
     
    */

    //A)


     /* function somar (numero1, numero2){
        numero1 = Number(prompt("escreva o 1° número"))
        numero2 = Number(prompt("escreva o 2° número"))
        
        return numero1 + numero2
    }
        let resposta = somar()
        console.log(resposta)  */
    
        //  CONCLUSÃO:  Foi decladado a função "somar" com os nomes de parametro "numero1 e numero2" entre parenteses.
        // Dentro da lógica da função, chamando os parametros e atribuido number e prompt para fazer a pergunta do número e retirar o retorno string usando  Number()
     //return para finalizar a função e chamar numero 1 + numero 2 ára somar 
     // nova variavel chamada "resposta" atribuindo a função "somar" 
     // console.log para imprimir a "resposta"



      //B) 
 /*       
        function numeros (numero1, numero2){
        numero1 = Number(prompt("Digite um número"))
        
        numero2 = Number(prompt("Digite outro número"))

        return numero1 >= numero2

    }
        let resposta = numeros()
        console.log(resposta)
     */

        //CONCLUSÃO no return foi usado >= para devolver booleano (true e false)
    
    
        //c)
/* 
         function numeroBoleano (numero){
            numero = 10
            let total = numero % 2 == 0
            return total 
        }

        console.log(numeroBoleano()) */

  
    /*      function mensagem (mensagemNova){
        
            mensagemNova = "escreva o 1° número"
            numeroMaiuscula = mensagemNova.toUpperCase()
            mensagemCaracter = mensagemNova.length

            return ` ${mensagemCaracter} ${numeroMaiuscula} `
    }

            console.log(mensagem()) */
        






        //Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
 
 
    /*    Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10 */


/* 
function somar (dois, cinco){
    let resposta = dois + cinco 

    return resposta

}

function subtrair (dois, cinco){
    let resposta = dois - cinco 

    return resposta

}

function multiplicacao (dois, cinco){
    let resposta = dois * cinco 

    return resposta

}

function divisao (dois, cinco){
    let resposta = dois / cinco 

    return resposta

}

let dois = Number(prompt("digite um numero"))
let cinco = Number(prompt("digite outro numero"))

console.log(`Números inseridos ${dois} e ${cinco}
soma: ${somar(dois,cinco)}
diferenca: ${subtrair(dois,cinco)}
multiplicacao: ${multiplicacao(dois,cinco)}
divisão: ${divisao(dois,cinco)}
`) */
