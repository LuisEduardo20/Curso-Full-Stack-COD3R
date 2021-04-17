for(let i = 1 ; i <= 10 ; i++) {
  console.log(`i = ${i}`);
}

const notas = [6.7, 7.4, 3.6, 6.2, 9.8];
for(let i = 0 ; i < notas.length ; i++) {
  console.log(`nota = ${notas[i]}`);
}

for (let i in notas) {
  console.log(i, notas[i]);
}

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 30,
  peso: 70,
  altura: 1.74
}

for (let atributos in pessoa) {
  console.log(`${atributos} = ${pessoa[atributos]}`);
}