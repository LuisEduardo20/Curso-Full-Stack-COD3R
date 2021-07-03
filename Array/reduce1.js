// É uma chamada encadeada que o resultado de um elemento e seu sucessor 
// e passa para o resultado para o elemento seguinte

const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
]

console.log(alunos.map(a => a.nota));

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) { // os parâmetro são flexíveis quanto ao dado passado, podendo ser, números, arrays, objetos entre outros
  console.log(acumulador, atual)
  return acumulador + atual
}, 10) // após a funão de callback é possível passar o valor inicial, caso ele não exista o primeiro elemento será o inicial

console.log(resultado);