// 26)​ Fazer um programa para encontrar todos os pares entre 1 e 100.

(function encontraPares() {
  let i = 0
  let pares = []
  while(i <= 100) {
    if((i % 2) == 0){
      pares.push(i)
    }
    i++
  }
  console.log(pares)
})()