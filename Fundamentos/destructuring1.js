 // Novo Recurso ES 2015
 const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
 }

console.log(pessoa);

const {nome, idade} = pessoa;  // Cria duas novas variáveis a partir do objeto pessoa
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;  // Cria duas novas variáveis com nomes definidos a partir do objeto pessoa
console.log(n);
console.log(i);

const {sobrenome, bemHumorada = true } = pessoa  // Nesse caso não existe esses campos dentro de pessoa, então sobrenome
console.log(sobrenome, bemHumorada);             // fica sendo undefined e bemHumorada fica como true por ser definida na constante

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep);