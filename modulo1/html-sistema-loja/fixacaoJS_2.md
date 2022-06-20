~~~Javascript
function calculaPrecoTotal(quantidade) {
let maças = 1.30
let maçasDuzia = 1
let compraDuzia = quantidade * maçasDuzia
let compranormal = quantidade * maças
  if(quantidade >= 12){
  return compraDuzia
} else {
  return  compranormal
}
return calculaPrecoTotal
}