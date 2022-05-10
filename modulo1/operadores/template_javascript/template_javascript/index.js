//Iniciando os da aula logica de programação e operadores

//1 Exercícios de interpretação de código
//
//Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.


//const bool1 = true
//const bool2 = false
//const bool3 = !bool2
//let resultado = bool1 && bool2

//Respostas

///a) bool1 && bool2 - Resultado = false
// b) bool1 && bool2 && bool3 - restultado = false
// c) !resultado && (bool1 || bool2) - resultado =  true
// d) (typeof resultado) = Boleano


//2 Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

//let primeiroNumero = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")

//const soma = primeiroNumero + segundoNumero

//console.log(soma)

//Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

//ABAIXO A SUGESTÃO \/

//let primeiroNumero = Number(prompt("Digite um numero!"));
//let segundoNumero = Number(prompt("Digite outro numero!"));

//const soma = primeiroNumero + segundoNumero 

//console.log(soma)

//CONCLUSAO = para a sugestão ao colega, como a prompt retorna uma "string" foi incluido a prompt dentro da Number() para converter de "strings" em numeros inteiros, por esse motivo o sinal de "+" em uma string ele concatena.

//1 - Exercícios de escrita de código

//1. Faça um programa que:
    
//a) Pergunte a idade do usuário
    
//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

//c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

//d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

//RESPOSTAS

//let idade = Number(prompt("qual a sua idade?"))
//let idadeAmigo = Number(prompt("Qual a idade do seu amigo?"))
//const maiorQue = idade > idadeAmigo
//const diferença = idade - idadeAmigo

//console.log("Sua idade é maior do que a do seu melhor amigo?", maiorQue)

//console.log("a diferença de idade é", diferença)

//CONCLUSÃO = foi solicitado que o usuário preencha a idade, idadeAmigo convertendo a "string" para "Number()"
//também foi criado as variaveis maiorQue e diferença com o operadores aritimetico e de comparação ">" e "-" 

//
// 2. Faça um programa que:
    
//a) Peça ao usuário que insira um número **par**
    
//b) Imprima na console **o resto da divisão** desse número por 2.

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

//let numeroPar = Number((prompt("Digite um número par")))

//const restoDaDivisao = numeroPar % 2

//console.log(restoDaDivisao)

//PRIMEIRA CONCLUSÃO: 
// Todos os números pares estão dando resultado = 0
//SEGUNDA CONCLUSÃO:
//Todos os números impares estão dando resultado = 1

//3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
//a) A idade do usuário em meses
    
//b) A idade do usuário em dias

//c) A idade do usuário em horas

//let idadeAnos = prompt("qual o ano que você nasceu?")
//let ano = prompt("em que ano estamos?")

//const idadeMeses = (ano-idadeAnos)*12

//const idadeDias = (ano-idadeAnos)*360

//const idadeHoras = (ano-idadeAnos)*720


//console.log("a idade do usuário em meses é", idadeMeses)
//console.log("a idade do usuário em dias é",idadeDias)
//console.log("a idade do usuário em horas é", idadeHoras)

//CONCLUSÃO:
//solicitei ao usuário que prenche-se pelo prompt o ano em que nasceu e o ano em que estamos.
//depois criei as variaveis idadeMeses, idadeDias, idadeHoras. Onde subtraindo o ano atual com o ano em que nasceu multiplicando com os valores de mseses, dias, horas.


//4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

//O primeiro numero é maior que segundo? true
//O primeiro numero é igual ao segundo? false
//O primeiro numero é divisível pelo segundo? true
//O segundo numero é divisível pelo primeiro? true

//obs: O true ou false vai depender dos números inseridos e do resultado das operações.
//
let numeroUm = Number(prompt("Digite o primeiro número"));
let numeroDois = Number(prompt("Digite o segundo número"));


let maiorQue = numeroUm > numeroDois;

console.log("O primeiro número é maior que o segundo?", maiorQue);

let igualAo = numeroUm === numeroDois

console.log("O primeiro número é igual ao segundo?", igualAo);

let divisivel = numeroUm % numeroDois == 0

console.log("O primeiro número é divisível pelo segundo?", divisivel);

let segundoDivisivel = numeroDois % numeroUm == 0 //observação, o operador "==" não foi ensinado em aula e não tem no pdf acabei conseguindo por uma ajuda do time que estava mais avançado no conteúdo.

console.log("O segundo número é divisivel pelo primeiro?", divisivel);






