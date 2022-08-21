const minhaString: String | Number = 50

let meuNumero: Number | String = "oi"
meuNumero = 50

//tipo! 
type person = {
    nome: string,
    idade: number,
    corFavorita: string
}

//Enum! vermelha, laranja, amarela, verde, azul, azul-escuro e violeta
enum corFavorita {
    VERMELHA = "Vermelha",
    LARANJA = "Laranja",
    AMARELA= "Amarela",
    VERDE = "Verde",
    AZUL = "Azul",
    AZULESCURO = "Azul-escuro",
    VIOLETA = "Violeta"
}


//objetos
const murilo: person = {
    nome: "Murilo", 
    idade: 27,
    corFavorita: corFavorita.AZUL
}

const joyce: person = {
    nome: "Joyce",
    idade: 27,
    corFavorita: corFavorita.LARANJA
}

const Joao: person = {
    nome: "Joao",
    idade: 24,
    corFavorita: corFavorita.VERDE
}