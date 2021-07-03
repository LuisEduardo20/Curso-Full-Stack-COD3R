const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    console.log(this.saudacao);
  }
}

pessoa.falar();
const falar = pessoa.falar;
falar();  // Conflito
console.log(typeof falar);

const falarDePessoa = pessoa.falar.bind(pessoa)  // Usando o bind a gente amarra a propriedade saudacao do obj pessoa independente de onde a função esteja
falarDePessoa();