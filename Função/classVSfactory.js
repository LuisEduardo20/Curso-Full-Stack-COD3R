class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa('Eduardo')
console.log(p1.nome);
console.log(p1);

const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}

const p2 = criarPessoa('João')
p2.falar()