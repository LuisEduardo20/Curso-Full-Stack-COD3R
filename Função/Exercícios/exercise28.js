// 28)​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function paresImpares(nums) {
  let pares = []
  let impares = []
  
  for(let i = 0 ; i < nums.length ; i++) {
    if((nums[i] % 2) == 0) {
      pares.push(nums[i])
    }
    else {
      impares.push(nums[i])
    }
  }
  console.log('Pares =', pares)
  console.log('Impares =', impares)
}

paresImpares([10, 5, 78, 6, 91, 24, 18])