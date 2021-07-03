// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes
//que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de
// minúsculas.

function contarCaractere(caractere, string) {
  let contador = 0;

  string.split('').forEach( el => el === caractere ? contador += 1 : contador += 0);

  console.log(contador);
}

contarCaractere("r", "A sorte favoreceu os audazes")
contarCaractere("c", "Conhece-te a ti mesmo")