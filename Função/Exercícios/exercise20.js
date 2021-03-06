/**
* 20)​ Crie um programa para informar quais e quantas notas são necessárias para 
* entregar o mínimo de cédulaspara um determinado valor informado pelo usuário 
* considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.Seu programa deve mostrar 
* apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deveinformar 
* apenas a seguinte informação (note que não foram exibidas informações sobre as 
* demais cédulas): 1nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function calculaCedulas(cash) {
  
  const cedulas = [100, 50, 10, 5, 1];
  let troco = ''

  cedulas.forEach(valor => {
    let qtd = 0
    if(valor <= cash) {
      while(valor <= cash) {
        cash -= valor
        qtd++   
      }
      troco += `${qtd} nota(s) de R$ ${valor.toFixed(2)}. `
    }
  })

  console.log(troco);
}

calculaCedulas(20)
calculaCedulas(18)
calculaCedulas(16)
calculaCedulas(15)
calculaCedulas(4)
calculaCedulas(55)
calculaCedulas(105)
calculaCedulas(255)
calculaCedulas(1255)