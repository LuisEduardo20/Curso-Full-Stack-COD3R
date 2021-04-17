// par nome/valor
const saudacao = 'Opa'// Contexto léxico 1

function exec() {
  const saudacao = 'Faaala' // contexto léxico 2
  return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Eduardo',
  idade: 21,
  peso: 108,
  endereco: {
    logradouro: 'Travessa Santo Amaro', 
    numero: 5
  }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);