// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

function contarPalavas(string) {
  let qtdWords = string.split(' ');

  console.log(qtdWords.length);
}

contarPalavas("Sou uma frase")
contarPalavas("Me divirto aprendendo a programar")