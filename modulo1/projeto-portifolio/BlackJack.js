
function comprarCarta() {
    // Cria array de cartas
    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
    // Cria array de naipes
    const naipes = ["♦️", "♥️", "♣️", "♠️"]
  
    // Sorteia uma carta
    const numero = cartas[Math.floor(Math.random() * 13)]
  
    // Sorteia um naipe
    const naipe = naipes[Math.floor(Math.random() * 4)]
  
    let valor
  
    // Verifica se é uma das letras e coloca o valor correspondente na variável valor
    if (numero === "A") {
      valor = 11
    } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10
    } else { // Se nao for uma das letras, só converte a string para número
      valor = Number(numero)
    }
  
    // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
    const carta = {
      texto: numero + naipe,
      valor: valor
    }
  
    return carta
  }
console.log("Bem-vindo(a) ao jogo Blackjack") 
   let iniciaJogo = confirm("Vamos jogar BlackJack?")
      if (iniciaJogo == true ){
         alert("Vamos jogar")
         let jogadaUsuario1 = comprarCarta() 
         let jogadaUsuario2 = comprarCarta()
         let cartaPc1 = comprarCarta()
         let cartaPc2 = comprarCarta()
         
         let pontuacaoUsuario = jogadaUsuario1.valor + jogadaUsuario2.valor
         let pontuacaoPc = cartaPc1.valor + cartaPc2.valor
     
            console.log(`Usuário - cartas: ${jogadaUsuario1.texto} ${jogadaUsuario2.texto} - ${pontuacaoUsuario}`)
            console.log(`Computador - cartas: ${cartaPc1.texto} ${cartaPc2.texto} - ${pontuacaoPc}`)
     
         if (pontuacaoUsuario > pontuacaoPc) {
            console.log("O usuário ganhou!")
            } else if (pontuacaoPc > pontuacaoUsuario) {
            console.log("O computador ganhou!")
            } else if (pontuacaoUsuario === pontuacaoPc) {
            console.log("Empate!")
         }
   }  else{ 
console.log("Jogo cancelado")
   } 