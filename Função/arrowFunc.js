let dobro = function (a) {
  return 2 * a;
}
console.log(dobro(2));

dobro = (a) => {return 2 * a;}  // Com o bloco é obrigatório o return
console.log(dobro(2));

dobro = a => 2 * a;   // Sem o bloco o return fica implícito
console.log(dobro(2));

let ola = function () {
  return 'Olá!';
}
console.log(ola());

ola = () => 'Olá!'
console.log(ola());

ola = _ => 'Olá!'   // Ainda é válido, contém 1 parâmetro
console.log(ola());