// Usando o var
for(var i = 0 ; i < 10 ; i++){
  console.log(i);
}

console.log('i =', i);        // Aparece pois como o var tem escopo global ela ainda é visível

for(let j = 0 ; j < 10 ; j++) {
  console.log(j);
}

console.log('j =', j);        // Erro pois o escopo da varipavel com let é local, ou seja só é visivel dentro do for