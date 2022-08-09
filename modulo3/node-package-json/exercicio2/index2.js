//exercicio 2

 const operacao = process.argv[2]

 switch(operacao){
	case "soma":
		console.log(Number(process.argv[3]) + Number(process.argv[4]))
		break;
	case "subt":
		console.log(Number(process.argv[3]) - Number(process.argv[4]))
		break;
    case "mult":
        console.log(Number(process.argv[3]) * Number(process.argv[4]))
        break;
    case "div":
        console.log(Number(process.argv[3]) / Number(process.argv[4]))
        break;
    default: 
    console.log('errou a lógica')
}  

