// IIFE -> Immediately Invoked Function Expression
// É um jeito de auto chamar a função recem declarada

(function() {
  console.log('Será executado na hora!');
  console.log('Foge do escopo mais abrangente!');
})()