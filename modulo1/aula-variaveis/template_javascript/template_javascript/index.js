// 1 - Exercícios de interpretação de código

//1.- 10, 5
//2.- 10,10,10
//3.- horas, salarioHoras

//2 - Exercícios de escrita de código

//1.Construa um programa, seguindo os seguintes passos:

//const nome 
//let idade
//console.log(typeof nome, idade)

//o resultado deu um erro pois não tem nada atribuido as variaveis

//const nome = prompt("qual o neu nome?")
//let idade = prompt("qual a sua idade?")
//console.log(typeof nome, idade)
//houve um erro pois estava com as variaveis declaradas nas linhas/numerações acima 
//então comentei para ignorar o código e abri novas variaveis com prompt para perguntar
//console.log("Olá", nome, "você tem", idade);

//2.Escreva um programa que faça 3 perguntas de Sim ou Não

//let roupaCor = ("Você está usando roupa azul?")
//let meiaLonga = ("Você está usando meia longa?")
//let camisetaCurta = ("Você está usando camiseta curta?")

//let resRoupa = ("sim")
//let resMeiaLonga = ("não")
//let resCamisetaCurta = ("não")

//console.log(roupaCor, resRoupa)
//console.log(meiaLonga, resMeiaLonga)
//console.log(camisetaCurta, resCamisetaCurta)

// 3.Suponha que temos duas variáveis a e b, c

let a = 10
let b = 25
c = a
a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//Desafio


//let numeroUm = prompt("Digite o primeiro numero")
//let numeroDois = prompt("Digite o segundo número") //a variavel vai receber o valor que o usuário digitar

//let numero11 = Number(numeroUm)
//let numero22 = Number(numeroDois)
//let somaAdicao = numero11 + numero22

//let somaMultiplicacao = Number(numeroUm * numeroDois);

//console.log("o primeiro número somado ao segundo número é", somaAdicao);

//console.log("o primeiro número multiplicado ao segundo é", somaMultiplicacao);

//console.log(typeof numeroUm,numeroDois) // As respostas da primeira parte são 2 strings pois o prompt retorna string, preciso converter para número.
//para somar  os numeros foi criado outras variaveis chamara numero11 e numero22 foi atribuido number pois eram string uma nova variavel chamada somaAdicao somou a duas 
//para multiplicar foi criado a variavel let somaMultiplicacao e atribuido o Number para fica numero inteiro multiplicar com o * as duas variaveis numeroUm e numeroDois

// DESAFIO DA RESPOSTA LABENU
const num1 = prompt("Insira o primeiro número"); // PROMPT PARA PERGUNTAR "INSIRA O NUMERO"
const num2 = prompt("Insira o segundo número");
console.log("Soma:", Number(num1) + Number(num2)); //CONSOLE LOG PARA IMPRIMIR O RESULTADO, "SOMA" ENTRE ASPAS PARA STRING
console.log("Multiplicação:", Number(num1) * Number(num2)); //NUMBER ENTRE PARENTESES DENTRO A VAR TRANSFORMANDO-A EM NUMERO INTEIRO
// SIMBOLODO DE + PARA SOMAR E * PARA MULTRIPLICAR

//O RESTUADO É QUE DA PARA ENCURTAR O CODIGO COLOCANDO ENTRE PARENTESES O NUMBER A STRING E OS SIMBOLOS JUNT COM AS VARIAVEIS QUE ERAM STRING

