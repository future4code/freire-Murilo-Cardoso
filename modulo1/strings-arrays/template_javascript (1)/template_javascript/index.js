//Exercícios de interpretação de código
//Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

//1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

//a) undefined - Aqui eu respondi "array" mas estava errado quando analisei código. O valor undefined representa um tipo mais profundo de ausência. É o valor de variáveis que não foram inicializadas e o valor que você obtém quando consulta o valor de uma propriedade de objeto ou elemento de matriz que não existe.

//b) null
//c) 11
//d) 3
//e) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12,13]
//f) 9



//Dúvida: O array devolve string também?

//2 Leia o código abaixo com atenção 


//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

//RESPOSTA

//SUBI NUM ÔNIBUS EM MIRROCOS, 27 

//Exercícios de escrita de código

//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
/*     O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! */

/* 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
a) Imprima no console o array completo
    
b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista. */

// banana, maça, morango, melancia, limão

/* let frutasPreferida = prompt("Digite 5 frutas preferidas")

const listaFrutas = ["banana","maça", "morango","melancia","limão"]

//let listaFrutas = frutasPreferida

//console.log(listaFrutas)

console.log(listaFrutas)

console.log("Essas são as minhas comidas preferidas:") 

console.log(listaFrutas[0])
console.log(listaFrutas[1])
console.log(listaFrutas[2])
console.log(listaFrutas[3])
console.log(listaFrutas[4])
console.log(listaFrutas[5]) 


let novaComidaPreferida = prompt("digite uma nova fruta preferida")
//R: uva

listaFrutas.splice(1,1)

console.log(listaFrutas[0])
console.log(novaComidaPreferida)
console.log(listaFrutas[1])
console.log(listaFrutas[2])
console.log(listaFrutas[3])
 */



/* 3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console */


let listaDeTarefas = []

let tarefaUm = prompt("Qual sua primeira tarefa?")
//R: corrida
let tarefaDois = prompt("Qual sua segunda tarefa?")
//R: louça
let tarefaTres = prompt("Qual sua terceira tarefa?")
//R: caminhada

listaDeTarefas.push(tarefaUm, tarefaDois, tarefaTres)

console.log(listaDeTarefas)

let tarefaRealizada = prompt("QUal tarefa você já realizou? Digite 0 para corrida 1 para louça e 2 para caminhada")
//R Usuário escolheu o 0

listaDeTarefas.splice(tarefaRealizada,1)

console.log(listaDeTarefas)

/* console.log(tarefaUm[0])
console.log(tarefaDois[1])
console.log(tarefaUm[2]) */

//let listaDeTarefas = [tarefaUm, tarefaDois, tarefaTres]




//DUVIDAS

//EXERCICIO 2 NÃO CONSEGUI REPALCE? 
//não consegui incluir com crase.. tirar dúvida

