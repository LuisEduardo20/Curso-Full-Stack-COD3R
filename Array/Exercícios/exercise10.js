// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.

function qtdMais(num) {
  let stringMais = ''

  for(let i = 0 ; i < num ; i++) {
    stringMais += '+'
  }

  console.log(stringMais)
}

qtdMais(2)
qtdMais(5)