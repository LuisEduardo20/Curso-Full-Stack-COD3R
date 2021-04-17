const faculdade = "Universidade de Pernambuco";

console.log(faculdade.charAt(5)); // Retorna a letra na posição 5 da string
console.log(faculdade.charAt(500)); // Não retorna nada

console.log(faculdade.charCodeAt(3)); // Retorna a letra na posição 3 de acordo com a tabela unicode//ascII

console.log(faculdade.indexOf('v')); // 3

console.log(faculdade.substring(3)); // versidade de Pernambuco
console.log(faculdade.substring(0, 6)); // Univer

console.log('Faculdade '.concat(faculdade).concat("!")); // Concatenação

console.log(faculdade.replace(3, '@'));   // Subistitui a letra na posição 3 pelo '@'
console.log('ETE, UPE, UFPE'.split(','));  // retorna array com 3 elementos