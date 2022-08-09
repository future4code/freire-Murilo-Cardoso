//Exercicio 1

//A) pela propriedade process.argv, exemplo process.argv[2]

console.log("Bem vindos ao projeto backend!")

const nome = "Murilo"
const idade = Number("27")

console.log(`"Olá ${nome}! Você tem ${idade} anos."`)

const idadeSete = Number("34")

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeSete} anos.`)

//ou
console.log("Olá", process.argv[2],"!","você tem", process.argv[3], "anos!" )
console.log("Olá", process.argv[2],"!","você tem", process.argv[3], "anos!", "Em sete anos você terá", process.argv[4],"anos.")


