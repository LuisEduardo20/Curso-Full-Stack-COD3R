// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
// exemplos abaixo para um melhor entendimento:

function objectToArray(obj) {
  return JSON.stringify(Object.entries(obj));
}

console.log(objectToArray({ nome: "João",
                idade: 25,
                profissao: "Desenvolvedor de softwares" }));

console.log(objectToArray({ codigo: 11111, preco: 12000 }));

