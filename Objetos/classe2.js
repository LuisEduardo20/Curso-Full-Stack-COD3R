class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Professor') {
    // chama o constructor do Avo para atribuir o this.sobrenome
    super(sobrenome)
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor() {
    // chama o constructor do Pai
    super('Silva')
  }
}

const filho = new Filho
console.log(filho)