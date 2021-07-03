/**
 * 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, 
 * taxa de juros e tempo de aplicação. Aprimeira função retornará o 
 * montante da aplicação financeira sob o regime de juros simples e a 
 * segundaretornará o valor da aplicação sob o regime de juros compostos.
 */

function jurosSimples(capIni, txJuros, tempo) {
  return capIni + (capIni * txJuros * tempo)
}

function jurosComposto(capIni, txJuros, tempo) {
  return (capIni * (1 + txJuros)**tempo).toFixed(2)
}

console.log(jurosSimples(1000, 0.50, 1.2))
console.log(jurosComposto(3500, 0.70, 0.8))