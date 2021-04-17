const peso1 = 1.0;
const peso2 = Number('2.3');        // Converte a string passada em um valor do tipo number

console.log(peso1, peso2);

console.log(Number.isInteger(peso1));   // true
console.log(Number.isInteger(peso2));   // false

const avaliacao1 = 9.15626;
const avaliacao2 = 6.12551;

const media = ((avaliacao1 * peso1) + (avaliacao2 * peso2)) / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2));        // Binário
console.log(media.toString(media));
