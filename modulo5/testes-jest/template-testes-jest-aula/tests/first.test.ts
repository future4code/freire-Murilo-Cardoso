
describe("Olá, estamos testando",()=>{

//ex0 
    test("é impar ou par?"), ()=>{
        expect(isEven(112)).toBe(true)
    }
    
//ex 1
    test("string em caixa alta"), ()=>{
        expect(getString("bananinha"))
    }

//ex 2
    test("string em array"), ()=>{
        expect(getStringInArray("dev"))
    }
//ex 3

    test("string em number"), ()=>{
        expect(transformNumberInString("50"))
    }
//ex 4 
    test("numero de caracteres"), ()=>{
        expect(transformStringInNumber("jest"))
    }

//ex 5
    test("numero aleatório de 1 a 10"), ()=>{
        expect(numberRandomBetWeen1And10())
    }

//ex 6 
test ("Verificar se existe um astrodev no array",()=>{
    const arrayNomes = getName()
    
    expect(arrayNomes).toContain("Astrodev")

})

//ex 7

test("Calcula idade",()=>{

    expect(calcAge(2000))
})


//ex8

test("Data",()=>{
    expect(formatDate("2022/09/26"))
})


    test("O número 20 deve ser maior que 15", ()=>{

        expect(20).toBeGreaterThan(15)

    })


    test("Testando se o valor é menor", ()=>{
        const n = 100
        expect(n).toBeLessThan(101)

    })
    test("Apenas testando o ambiente", ()=>{

        expect(100).toBeGreaterThan(99)

    })

    test("Testando se o valor é menor", ()=>{
        const n = 100
        expect(n).toBeLessThan(101)

    })

    //toBe
    test("10 multiplicado por 2 deve ser 20",()=>{
        const n = getNum()
        expect(n).toBe(20)

    })
    //
    test ("Verificar se existe um gato no array",()=>{
        const arrayDebichos = getAnimals()
        
        expect(arrayDebichos).toContain("Cachorro caramelo")

    })

    test("Verificando a task no array de tasks",()=>{

        const task:ITask = {
            id:"2",
            name:"Estudar jest"
        }
        expect(tasks).toContainEqual(task)


    })

    test("Verificando se número é par",()=>{

        expect(isEven(10)).toBe(true)

    })


})

interface ITask {
    id: string,
    name: string
}

const tasks: ITask[] =[
    {
        id:"1",
        name:"Fazer o rango"

    },
    {
        id:"2",
        name: "Estudar jest"
    }
]

const isEven=(integer: number)=>{
   return integer%2==0
}



const getAnimals =()=>{
    return (["Pato","Cachorro caramelo","Gato"])
}

const getNum=()=>{
    return 20
}

const getString=(string: string):string=>{
    return string.toUpperCase()
}

const getStringInArray=(string:string):string[]=>{
    return string.split("")
}


const transformNumberInString=(number:string):number=>{
    return Number(number)
}


const transformStringInNumber=(string:any):number=>{
    return string.length()
}

const numberRandomBetWeen1And10=():number=>{
    const min = 1
    const max = 10
    const result = Math.floor(Math.random() * (max - min + 1)) + min

    return result
}



interface UList {
    id: string,
    name: string,
    age: number
}


const getName = ():UList[]=>{
    return ([
    {
        id: "1",
        name: "Astrodev",
        age: 15
    },
    {
        id: "2",
        name: "Tigreal",
        age: 20   
    },
    {   
        id: "3",
        name: "McTaison",
        age: 25
    }
])}

const calcAverage = (list:number[]):number=>{
    
    let totalSum = 0
    
    for (let n of list) {
        totalSum += n
    }

    const average = Math.ceil(totalSum / list.length)

    return average
}

const calcAge = (year: number): number => {
    const currentYear = new Date().getFullYear()
    const age = currentYear - year
    
    return age
}

const formatDate = (initialDate: string): string => {
    const date = new Date(initialDate)
		const formattedDate = date.toLocaleDateString()

    return formattedDate 
}