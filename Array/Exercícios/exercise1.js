// Crie uma função que retorna a string "Olá, " concatenada com um argumento text 
// (a ser passado para a função) e com ponto de exclamação "!" no final.

function imprimeOla(nome) {
  let ola = 'Olá, '
  return ola.concat(nome, '!')
}

console.log(imprimeOla('Eduardo'))