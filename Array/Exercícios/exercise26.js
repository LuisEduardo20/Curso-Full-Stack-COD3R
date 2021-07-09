// Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
// ou seja, sem as vogais.

function removerVogais(word) {
    return word.replace(/[aeiou]/gi, '')
}

console.log(removerVogais('Cod3r'));
console.log(removerVogais('Eduardo'));