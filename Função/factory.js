// Factory function é uma função que retorna um novo objeto
// Factory simlpes
function criarPessoa(Nome, Idade, Peso, Altura) {
  return {
    nome: Nome,
    //Nome,         <- também é válido
    idade: Idade,
    //Idade,        <- também é válido
    peso: Peso,
    //Peso,         <- também é válido
    altura: Altura
    //Altura        <- também é válido
  }
}

const pessoa1 = new criarPessoa('Luis Eduardo', 21, 110, 1.71)
console.log(pessoa1);

const pessoa2 = new criarPessoa('Maria Alzeni', 49, 68, 1.58)
console.log(pessoa2);