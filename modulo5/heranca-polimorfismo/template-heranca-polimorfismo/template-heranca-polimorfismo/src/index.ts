import {User} from "./User"
import {Customer} from "./Customer"
import {clientResidencial} from "./Client"


console.log("Iniciando exercícios de heranca-polimorfismo!")

//a)
//const user: User = new User("10", "cavalo_user@gmail.com", "Cavalo", "senhaDeclarada")
//console.log(user)

  //a) sim! se chamar o console.log(user) mas se chamar user. não
  //b) uma apenas

  //exercicio2 

  //a)
const customer: Customer = new Customer("15","egua_user@gmail.com", "egua", "senhaEgua", "151515")

console.log(customer)

//b) 1 vez 

//EXERCÍCIO 3, 4,5
console.log(customer.introduceYourself())

//console.log(user.introduceYourself())

console.log(clientResidencial)