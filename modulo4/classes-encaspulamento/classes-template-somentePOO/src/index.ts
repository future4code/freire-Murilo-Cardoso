import app from "./app";

//a)
//Toda classe possui constructor, se não chamado ele aparece como vazio. Construtor serve para inicializar objetos com
//atributos definidos, para chama-lo usamos o "this"

//b) 1 vez

//c) atrés dos métodos públicos. ex public getName(){return this.name;}

console.log("aprendendo sobre POO");


//VARIAVEL DE TIPO

/* type Transaction = {
    description: string,
    value: number,
    date: string
  } */

//TRANSFORMADA EM VARIAVEL DE CLASS


class Transaction {
  private date: string;
  private value: number;
  private description: string;

  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description;
  }

  public getDate(): string {
    return this.date;
  }

  public getValue(): number {
    return this.value;
  }

  public getDesctription(): string{
    return this.description;
  }

}



class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getAge(): Number {
    return this.age;
  }

  public setTrasnactions(newTransactions:Transaction):void{
    this.transactions.push(newTransactions)
  }
}

const newUser: UserAccount = new UserAccount("585858", "Carlos", 28);
const newTransaction: Transaction = new Transaction("25/04/1995", 15, "pix");

newUser.setTrasnactions(newTransaction)

console.table(newUser)


