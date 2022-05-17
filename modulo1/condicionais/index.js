/* - **Exercícios de interpretação de código**
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
    1. Leia o código abaixo: */

    //Resposta:

    //Ele divide por 2 o número que o usuário responder
    // e compara com if se é igual a 0
    // se sim "passou no teste" se não "não passou no teste"

    //Números pares
    //Números impares

    //2/ O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

    //a) Sever para ver o preço da fruta
    //b) O preço da fruta, maça, é, R$ 2,25 preço
    //c) //O preço da fruta  Pêra  é  R$  5

    //3)
        //a) a primeira linha está criando uma variavel de nome "numero" e atribuindo uma pergunta. Usando o Number e prompt para perguntar e Number para transformar string em numero inteiro
        //b)se for 10 "Esse número passou no teste"
        //se for -10 vai da erro pois não existe o else somente o if

        
/* 
       - **Exercícios de escrita de código**
    1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        
        a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável. */
        
        //RESPOSTA:
             
        
/*         const pergunta = Number(prompt(`Qual a sua idade?`))
        
        if (pergunta > 18){
            console.log("Você pode dirigir!")
        }else{
            console.log("você não pode dirigir!")
        } */
    
        //
        

/* 
        b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
         */
        
/*          c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."` */
        
/*      2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else */
    
    //function turnoDoAluno = (turno)
    
         let turno = prompt(`Em que turno você estuda? M/V/N (Matutino) ou (Vespertino) (Noturno?`).toLowerCase()
                
                if (turno === "m"){
                    console.log("Bom Dia!")
                } else if(turno === "v"){
                    console.log("Boa tarde!")
                }else if (turno === "n")
                {console.log("Boa noite!")
                
            }else{
                console.log("Digite apenas m, n ou v")
            }
            



                
                //confirmar a questão de o N imprimir tarde também
        
     
            //3 Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

/*              let turno = prompt(`Em que turno você estuda? M/V/N (Matutino) ou (Vespertino) (Noturno?`).toLowerCase()
            
             switch (turno){
                case 'm':
                    console.log("Bom Dia!");
                    break
                case 'v':
                    console.log("Boa tarde!")
                    break
                case 'n':  
                    console.log("Boa noite")
                    }
 */
                        
                    
                    //4onsidere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

            /*         const cinema = prompt("Digite o gênero do filme que você gostaria de ver")
                    const valor = Number(prompt(`Insira o valor desejado`))
                        if (cinema === 'fantasia'&& valor <= 15){ console.log('bom filme pessoal!')
                        } else {
                            console.log('Escolha outro filme :(')
                        } */




