/**
 * 37) ​ Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
 * como parâmetros um número n (número de termo), ​ a1 ​ (o primeiro termo) e ​ r ​ (a razão) e escreva os ​ n ​ termos ,
 * bem como a soma dos elementos.
 */

function PA(n, a1, r) {
  let result = []
  for(let i = 0 ; i < a1 ; i++){
    console.log(a1 * (n[i] + r))
  }

}

function PG(n, a1, r) {
  let result = []

}

PA([2, 4, 6], 2, 2)