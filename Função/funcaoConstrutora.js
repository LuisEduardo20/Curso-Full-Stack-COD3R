function Carro(velocidadeMaxima = 200, delta = 5) {
  // Atributo privado
  let velocidadeAtual = 0

  this.acelerar = function () {
    if (velocidadeAtual <= velocidadeMaxima) {
      velocidadeAtual += delta;
    }
    else {
      velocidadeAtual = velocidadeMaxima
    }
  }

  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  }
}

const uno = new Carro  // Sem os parenteses para usar os valores padrão da função original
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());