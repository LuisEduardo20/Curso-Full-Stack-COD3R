function Pessoa() {
  this.idade = 0

  setInterval(() => {  // Com a arrow function o this não é alterado
    this.idade++
    console.log(this.idade);
  }, 1000)
}

new Pessoa