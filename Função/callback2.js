const notas = [7.7, 6.5, 5.2, 6.0, 1.8, 4.2, 9.8, 10.0, 8.5, 6.3, 7.1]

// Sem callback
let notasBaixas = []
for(i in notas){
  if(notas[i] < 7) {
    notasBaixas.push(notas[i])
  }
}
console.log(notasBaixas);

// Com callback
const notasBaixas2 = notas.filter(function (notas) {
  return notas < 7
})
console.log(notasBaixas2);

// Callback com arrow function
const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(notasBaixas3);