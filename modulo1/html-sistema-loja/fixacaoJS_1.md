~~~Javascript

let salario = 2000
let comissaoPorVenda = qtdeCarrosVendidos * 100
let bonusExtraComissao = valorTotalVendas * 0.05
let totalComissao = comissaoPorVenda + bonusExtraComissao
let salarioFinal = salario + totalComissao

  if(qtdeCarrosVendidos === 0){
    return salario
  } else {
    return salarioFinal
  }
  return salario