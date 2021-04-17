function Pessoa(nome) {
  this.nome = nome

  this.falar = function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa('Eduardo')
console.log(p1.nome);
p1.falar( )