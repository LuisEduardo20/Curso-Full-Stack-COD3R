// Usando notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
  // 'this' torna a variável pública
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto('lápis', 2.00, 0.15)
const p2 = new Produto('caderno', 25.00, 0.25)
console.log(p1)
console.log(p1.nome)
console.log(p1.getPrecoComDesconto())
//console.log(p1.preco)  Como não temos o this.preco nem o this.desconto para expor essas variáveis
//                       elas só são possíveis de acessar dentro da função construtora

console.log(p2)
console.log(p2.nome)
console.log(p2.getPrecoComDesconto())

// Função factory  ->  É uma função que só serve para criar algo
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome, salarioBase, faltas,
    getSalarioComFaltas() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const funcionario1 = criarFuncionario('Paulo', 1500, 3)
const funcionario2 = criarFuncionario('Josefa', 2350, 5)
console.log(funcionario1.getSalarioComFaltas(), funcionario2.getSalarioComFaltas())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// JSON.parse()
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)