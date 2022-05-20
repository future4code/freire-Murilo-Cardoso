/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
/* /*  *///- Existem 2 jogadores: o usuário e o computador.
//
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
   
  


 
