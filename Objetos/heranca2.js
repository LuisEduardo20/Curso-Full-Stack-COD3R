// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'D' // Evite fazer isso, não é uma boa prática
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0)
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)

console.log(avo.attr1)
console.log(avo.attr2)
console.log(avo.attr3)

const carro = {
  velAtual: 0,
  velMax: 200,

  aceleraMais (delta) {
    if(this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    }
    else {
      this.velAtual = this.velMax
    }
  },

  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 //shadowing
}

const volvo = {
  modelo: 'V40',
  status() {
    // O super utiliza a propriedade do objeto que está acima
    return `${this.modelo}: ${super.status()}`
  }
}

// Setar o prototype de um objeto
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(400)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())
ferrari.aceleraMais(25)
console.log(ferrari.status())