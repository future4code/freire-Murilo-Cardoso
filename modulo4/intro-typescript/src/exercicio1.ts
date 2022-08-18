/* function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }  */

   function checaTriangulo(a: number, b: number, c: number) :string {
    if(a !== b && b !== c){
        return "Escaleno";
    } else if (a === b && b === c){
        return "Equilátero";
    }
    return "Isósceles";
  }

  console.log(checaTriangulo(1,2,3)) 

/*   function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 3, y: 7 });
 */

/* const variavel :string = "OI"

console.log(variavel) */


type User = {
  name: string,
  age: number
}
type Account = {
  userName: string,
  password: string
}

type UserInfo = User & Account

const user: UserInfo ={
  name: "lua",
  age: 27,
  userName: "lualua",
  password: "1234"
}

console.log(user)