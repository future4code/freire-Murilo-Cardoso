// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

altura = Number(prompt("digite altura"))
largura = Number(prompt("digite altura"))
resultado = altura*largura

  console.log(resultado)
}



// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  anoAtual = Number(prompt("escreva o ano atual"))
  anoNascimento = Number(prompt("Digite o ano do seu nascimento"))
  idade = anoAtual-anoNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
/* peso = Number(prompt("digite o seu peso em kg"))
altura = Number(prompt("digite sua altura em metros")) */
imc = peso / (altura*altura)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
nome = prompt("Digite seu nome")
idade = Number(prompt("Digite sua idade"))
email = prompt("digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  cor1 = prompt('Digite sua 1°cor favorita')
  cor2 = prompt('Digite sua 2° cor favorita')
  cor3 = prompt('Digite sua 3° cor favorita')
  listaCores = [cor1,cor2,cor3]

   console.log(listaCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  fraseMaiuscula = string.toUpperCase()
  return fraseMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  semPrejuizo = custo / valorIngresso

  return semPrejuizo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  tamanho = string1 >= string2

  return tamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  array = array[0]

  return array
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array [array.length -1]
  
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
/*     let tamanho = array.length
    let temp = 0
    temp = array[0]
    array[tamanho-1] = temp
    let array2 = array
      return array2 */
    let tamanho = array.length
    let guarda = array[0]
    array[0] = array[tamanho-1]
    array[tamanho-1] = guarda

      return array
      //essa foi dificil estudar mais
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // impleme]nte sua lógica aqui
  
  return string1.toLowerCase() == string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  anoAtual = Number(prompt("Em que ano estamos?"))
  anoNascimento = Number(prompt("Em que ano você nasceu?"))
  anoCarteira = Number(prompt("Em que ano sua carteira foi emitida?"))
  let idade = anoAtual - anoNascimento
  let idadeCarteira = anoAtual - anoCarteira
  let caso1 = (idade <= 20) && (idadeCarteira >= 5)
  let caso2 = ((idade > 20) && (idade <=50)) && (idadeCarteira >= 10)
  let caso3 = (idade > 50) && (idadeCarteira > 15)
  let renovacao = caso1 || caso2 || caso3
 return console.log(renovacao)
 
 }
 
 //checaRenovacaoRG()



// EXERCÍCIO 14
function checaAnoBissexto(ano)
  // implemente sua lógica aqui
  function checaAnoBissexto(ano) {
    return (ano % 400) === 0  || ((ano % 4 === 0 ) && (ano % 100 != 0))
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu()
  // implemente sua lógica aqui
  function checaValidadeInscricaoLabenu() {
    let maiorIdade = prompt('Você tem mais de 18 anos?') == 'sim'
    let ensinoMedio = prompt('Você possui ensino médio completo?') == 'sim'
    let disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?') == 'sim'
  
    return  console.log(maiorIdade && ensinoMedio && disponibilidade)
}