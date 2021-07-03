// Cópia por referência
const a = {nome: 'um nome qualquer'};

console.log(a);

const b = a;

console.log(b);

b.nome = 'o nome foi alterado';

console.log(a.nome);
console.log(b.nome);

// Cópia por valor (Tipos primitivos)
const c = 3;
let d = c;

d++;

console.log(d);
console.log(c);

// null e undefined
let valor;
console.log(valor); // A varíavel nunca teve um valor, portanto é retornado undefined

valor = null;       // Ela foi declarada e inicializada porém não aponta para um endereço de memória
console.log(valor);
//console.log(valor.toString());   retorna typeError